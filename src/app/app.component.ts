
import { Component, OnInit } from '@angular/core';
import { AlunoService } from './services/alunos.service';
import { Aluno } from './models/alunos';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  aluno = {} as Aluno;
  alunos: Aluno[];

  constructor(private alunoService: AlunoService) {}
  
  ngOnInit() {
    this.getAluno();
  }

  // defini se um aluno será criado ou atualizado
  saveAluno(form: NgForm) {
    if (this.aluno.id !== undefined) {
      this.alunoService.updateAluno(this.aluno).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.alunoService.saveAluno(this.aluno).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obter todos os alunos
  getAluno() {
    this.alunoService.getAluno().subscribe((alunos: Aluno[]) => {
      this.alunos = alunos;
    });
  }

  // deleta um Aluno
  deleteAluno(aluno: Aluno) {
    this.alunoService.deleteAluno(aluno).subscribe(() => {
      this.getAluno();
    });
  }

  // copia o aluno para ser editado.
  editAluno(aluno: Aluno) {
    this.aluno = { ...aluno };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getAluno();
    form.resetForm();
    this.aluno = {} as Aluno;
  }

}