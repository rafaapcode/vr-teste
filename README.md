# Teste VR

## Objetivo criar um sistema simples de notificação usando RABBITMQ , NESTJS e ANGULAR.

## Estrutura do projeto

- O projeto foi dividido em 3 partes, sendo um o front-end e 2 para o backend.
- Um serviço do backend é responsável por receber a mensagem e inserir ela no RABBITMQ.
- Já o outro serviço do backend é responsável por consumir as mensagens da FILA e processar elas, além de ser responsável por realizar a comunicação WEBSOCKET com o front-End, atualizando dos STATUS das notificações.

## Passo a Passo para rodar o projeto.
- 1 Primeiro execute o RABBITMQ, para isso voce pode usar o comando do docker:
  - ` docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4-management``

- 2 Instale a CLI do Angular de forma global, usando: `npm install -g @angular/cli`

- 3 Depois entre nas pastas `vr-software-backend`, `vr-software-backend-consumer` e `vr-frontend` e instale as dependências usando o `npm install` para cada uma delas.

- 4 Após isso voce iniciar primeiro o backend tanto o `vr-software-backend` quanto o `vr-software-backend-consumer`. Para inicar os seviços do backend voce pode usar o comando: `npm run start:dev`. Depois de inicar os serviços do backend , pode iniciar o frontEnd , usando o comando `ng serve`.