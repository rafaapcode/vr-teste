# Teste VR

## Objetivo criar um sistema simples de notificação usando RABBITMQ , NESTJS e ANGULAR.

## Passo a Passo para rodar o projeto.
- 1 Primeiro execute o RABBITMQ, para isso voce pode usar o comando do docker:
  - ` docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4-management``

- 2 Instale a CLI do Angular de forma global, usando: `npm install -g @angular/cli`

- 2 Depois entre nas pastas `vr-software-backend`, `vr-software-backend-consumer` e `vr-frontend` e instale as dependências usando o `npm install` para cada uma delas.

- 3 Após isso voce iniciar primeiro o backend tanto o `vr-software-backend` quanto o `vr-software-backend-consumer`. Para inicar os seviços do backend voce pode usar o comando: `npm run start:dev`. Depois de inicar os serviços do backend , pode iniciar o frontEnd , usando o comando `ng serve`.