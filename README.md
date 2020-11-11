# 1° Passo -
Para o sistema rodar é necessário
* NodeJS (incluido o npm)
* Angular-cli | -> npm install -g @angular/cli
* json-server | -> sudo npm install -g json-server

## 2° Passo -
Baixe o codigo via a url do repositorio, ao terminar de baixar os arquivos do repositório rode em um terminal dentro da pasta do projeto o seguinte comando:
* npm install (com isso deve evitar os problemas de depencia);

## 3° Passo -
Como tive problemas com a manipulação dos dados, optei por criar uma api rest fake, inseri mais um campo (ID), para facilitar nas requisiçes o que diminuiu bastante linhas de cdigo, em contramão por ter um arquivo json com os dados sendo inseridos e excluidos acabei não inserindo o localStorage, que nesse caso nem seria usado, para rodar JSON Server, rode em outro terminal dentro da pasta do projeto o seguinte comando:
json-server --watch src/assets/data/db.json

## 4° Passo -
Rode o servidor de desenvolvimento em um terminal dentro da pasta do projeto com o comando:
ng serve --open (Isso irá abrir a aplicação direto no navegador)

## Pronto o Ambiente já pode ser testado!!!!!!!!!!!
