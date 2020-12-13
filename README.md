# Web Template Project

*This repository contains a template for nodeJS, ReactJs projects using TypeScript.*

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


## 🛠 Built With

* [Node](https://nodejs.org/) - JavaScript runtime environment
* [ReactJs](https://reactjs.org/) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
* [Yarn](https://yarnpkg.com/) - Package Manager
* [Express](https://expressjs.com/) - Web framework used NodeJS
* [TypeScript](https://www.typescriptlang.org/) - Typed Superset of JavaScript - used as a development dependency

## 🎖 Author
* **Geraldo Braz** - *Initial work* - [@geraldobraz](https://github.com/geraldobraz)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
