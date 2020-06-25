# NodeJS Template Project
*This repository contains a template for nodeJS projects using TypeScript. It also has some dependencies as Express and dotEnv.*

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

Inside de project's folder, run:

```
yarn
```

### 🏎 Running application

```
yarn dev:server
```

## 🛠 Built With

* [Node](https://nodejs.org/) - JavaScript runtime environment
* [Yarn](https://yarnpkg.com/) - Package Manager
* [Express](https://expressjs.com/) - Web framework used NodeJS
* [TypeScript](https://www.typescriptlang.org/) - Typed Superset of JavaScript - used as a development dependency

## 🎖 Author
* **Geraldo Braz** - *Initial work* - [@geraldobraz](https://github.com/geraldobraz)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
