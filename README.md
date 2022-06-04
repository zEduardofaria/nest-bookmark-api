<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<h1 align="center">
   ♻️ <a href="#"> Nest JS Bookmark API </a>
</h1>

<h3 align="center">
    It's just a project to study!
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/zEduardofaria/nest-bookmark-api?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/zEduardofaria/nest-bookmark-api">
  
  <a href="https://github.com/zEduardofaria/nest-bookmark-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/zEduardofaria/nest-bookmark-api">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/zEduardofaria/nest-bookmark-api/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/zEduardofaria/nest-bookmark-api?style=social">
  </a>
</p>

<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#user-content-license">License</a>

</p>

## About

♻️ Ecoleta - is a way to connect companies and entities that collect organic and inorganic waste to people who need to dispose of their waste in an ecological way.
Project developed during ** NLW - Next Level Week ** offered by [Rocketseat](https://blog.rocketseat.com.br/primeira-next-level-week/). NLW is an online experience with lots of practical content, challenges and hacks where the content is available for a week.

---

## Features

- [x] Companies or entities can register on the web platform by sending:

  - [x] an image of the collection point
  - [x] entity name, email and whatsapp
  - [x] and the address so that it can appear on the map
  - [x] in addition to selecting one or more collection items:
    - lamps
    - Batteries
    - papers and cardboard
    - electronic waste
    - organic waste
    - kitchen oil

- [x] Users have access to the mobile application, where they can:
  - [x] browse the map to see the registered institutions
  - [x] contact the entity via E-mail or WhatsApp

---

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/), [Docker] (https://www.docker.com/),
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running the Backend (Server)

```bash

# Clone this repository
$ git clone git@github.com:zEduardofaria/nest-bookmark-api.git

# Access the project folder cmd/terminal
$ cd nest-bookmark-api

# install the dependencies
$ yarn install

# Create a .env file based in .env-example

# Create a .env.test file based in .env-test-example

# Run the application in development mode
$ yarn start:dev

# The server will start at port: 3333 - go to http://localhost:3333

```

#### Testing (Server)

```bash

# Clone this repository
$ yarn test:e2e

```

<p align="center">
  <a href="https://github.com/zEduardofaria/nest-bookmark-api/blob/master/Insomnia_API_Ecoletajson.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## Tech Stack

The following tools were used in the construction of the project:

#### **Server** ([NodeJS](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

- **[NestJS](http://nestjs.com/)**
- **[Pactum](https://pactumjs.github.io/)**
- **[Passaport](https://www.passportjs.org/)**
- **[Prisma](https://www.prisma.io/)**

> See the file [package.json](https://github.com/zEduardofaria/nest-bookmark-api/blob/master/server/package.json)

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- API Test: **[Insomnia](https://insomnia.rest/)**

---

## License

This project is under the license [MIT](./LICENSE.md).

Made with love by Eduardo Faria 👋🏽 [Get in Touch!](Https://www.linkedin.com/in/eduardo-fariasilva/)

---
