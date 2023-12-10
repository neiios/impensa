<p align="center">
  <a href="https://impensa.sgf.lt/">
  <img src="./public/assets/images/logo-readme.svg" />
    </a>
</p>

<div align="center">

### Simple, effective expense management app

<br/>

[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/impensa/impensa)
![Stars](https://img.shields.io/github/stars/richard96292/impensa.svg)
![License](https://img.shields.io/github/license/richard96292/impensa.svg)
![Forks](https://img.shields.io/github/forks/richard96292/impensa.svg)

</div>

## Impensa is an open-source expense management app

- See where all your money goes by easily adding and categorizing new expenses
- Analyze your expenditure using data visualization tools
- Export .xlsx report with all your expenses

## What's cool about this?

Impensa is an open-source project, meaning you can easily access needed app functional and modify lines of code.

We are an open-source alternative to products such as Mint, Simplifi or PocketGuard. Although the functionality of the app is not as advanced, we're designed to be more developer-friendly.

## Features

![ui-demo](./public/assets/images/UI-demo.gif)

## Technologies

Let's talk about the architecture of this mono repo:

- **Full-stack JavaScript**: We use Node.js to power our servers, and React to power our frontend. Almost all of the code you'll touch in this codebase will be JavaScript.
- Here is a list of all the big technologies we use:
  - **PostgreSQL 16**: Object-relational database
  - **.Net 8**: Our backend framework of choice
  - **React 18**: Frontend framework
  - **Docker**: To deploy our app in a neat container

## Deployment

We support deploying the application using docker.
You will need to clone both the client and the server repositories.
Docker image will need to be built locally with `sudo docker build -t impensa-server-dotnet:latest .`.
After that you can use the provided docker-compose file to run the application.
It is recommended to use a reverse proxy in front of the application.

This is the recommended project structure:

```plaintext
impensa
├── client
├── docker-compose.yaml
├── Dockerfile
└── server-dotnet
```

## Code Style

We run Prettier on-commit, which means you can write code in whatever style you want and it will be automatically formatted according to the common style when you run `git commit`. We also have ESLint set up, although we've disabled all stylistic rules since Prettier takes care of those.

## Contributors 👑

<a href="https://github.com/tmneth">
  <img src="https://avatars.githubusercontent.com/u/80415416?v=4" width="50" height="50" alt="tmneth"/>
</a>
<a href="https://github.com/richard96292">
  <img src="https://avatars.githubusercontent.com/u/68248740?v=4" width="50" height="50" alt="richard96292"/>
</a> 
<a href="https://github.com/tomas6446">
  <img src="https://avatars.githubusercontent.com/u/77100735?v=4" width="50" height="50" alt="tomas6446"/>
</a>
