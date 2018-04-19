# Projeto - Bora Ajudar

Projeto escrito usando React.js

Recat é uma biblioteca JavaScript de código aberto declarativa, eficiente e flexível
para a criação  de interface de usuário (UI).

Uma linguagem de programação declarativa é geralmente definida como o contrário de uma 
linguagem imperativa, por tanto, enquanto que a declarativa se preocupa com o que o 
programador quer fazer, a imperativa quer saber como atingir o objetivo desejado.

* React é flexível: tudo é componente
* React é eficiente, propôe criação do seu próprio DOM, mais eficiente, no qual os 
componente vivem, o que é mais conhecido como Virtual DOM.

Assim, toda vez que um componente é renderizado, o React atualiza o virtual DOM de cada
componete já renderizado e busca as mudanças. E como o Virtual DOM é leve, esse processo é muito rápido.

# Deployment

## Docker

## Configurando Ambiente

### a) Instalar o Docker:

Referencia: [Documentacao oficial](https://docs.docker.com/install/#supported-platforms)

Usuario Linux Debian/Ubunto



### b) instalar o Docker Compose:

Referencia: [Documentacao Oficial](https://docs.docker.com/compose/install/#install-compose)



### Deploy with docker compose

[![Rocket.Chat logo](https://d207aa93qlcgug.cloudfront.net/1.95.5.qa/img/nav/docker-logo-loggedout.png)](https://hub.docker.com/r/rocketchat/rocket.chat/)

```
$ docker-compose build
$ docker-compose up -d
```

## NPM or YARN

```
$ npm install # or yarn install
$ npm start   # ou yanr start
```
