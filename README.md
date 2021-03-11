# Web Template Project
<!-- You can add logo to your application here. Use https://www.canva.com/pt_br/criar/logotipo/ to create logos.
 -->

## Overview
*This repository contains a template for nodeJS, ReactJs projects using TypeScript.*

## Table of contents
<!--ts-->
   * [Overview](#Overview)
   * [Table of contents](#table-of-contents)
   * [Getting Started](#🚀-getting-started)
      * [Prerequisites](#🚨-prerequisites)
      * [Installing dependencies](#📥-installing-dependencies)
      * [Running application](#🏎-running-application)
   * [Screenshots](#📷-screenshots)
   * [Running tests](#🔬-running-tests)
   * [Built With](#🛠-built-with)
   * [Author](#🎖-author)
   * [License](#📝-license)
<!--te-->

## 🚀 Getting Started

### 🚨 Prerequisites

#### MacOS
Install Homebrew

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
Install tools

```
brew install yarn
brew install node
```

#### Ubuntu
Configuring repository

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
Install tools

```
sudo apt update
sudo apt install yarn
sudo apt install nodejs
```

#### Windows
Install [Chocolatey](https://chocolatey.org/install)

Install tools
```
choco install yarn
choco install nodejs
```


### 📥 Installing dependencies

Inside the project's folder, run:

```
yarn
```

### 🏎 Running application
Go to the backend folder and run the following command to start the backend server
```
yarn dev:server
```

Go to the frontend folder and run the following command to start the web application
```
yarn start
```


## 🔬 Running tests
To run the tests go to the frontend folder and run the following command
```
yarn test
```

## 📷 Screenshots
<p align="center">
    <!-- <img src="frontend/.github/calendar-view.png"> -->
    <!-- <img src="frontend/.github/dialog-view.png"> -->
</p>

## 🛠 Built With

* [Node](https://nodejs.org/)
* [ReactJs](https://reactjs.org/)
* [Yarn](https://yarnpkg.com/)
* [Express](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)

## 🎖 Author
* **Geraldo Braz** - *Initial work* - [@geraldobraz](https://github.com/geraldobraz)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
