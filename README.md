# Quick Start Template Angular HelloWorld Client

This project is for quickly building production-ready application using Angular version - "~13.2.3" and
Typescript version - "~4.5.2".

### Requirements

Node and npm are required for this repo.

### Installation

Install the dependencies:

```bash
npm install -g @angular/cli
```

Set the environment variables:

```bash
cp .env.example .env
# open .env and modify the environment variables (if needed)
```

###ENV
ANGULAR_APP_NAME

### Commands:

Run the code in dev mode

```bash
npm start
```

Running tests

```bash
npm run test
```

Running tests coverage

```bash
npm run test:coverage
```

Linting

```
# run ESLint

npm run lint

# fix ESLint errors

npm run lint:fix

# run prettier

yarn prettier
To modify the ESLint configuration, update the `.tsconfig.json` file.
To modify the Prettier configuration, update the `.prettierrc` file.
```

## Run dockerized version of the app

Clone [API](https://github.com/CognizantStudio/quickstart-template-springboot-helloworld-api) along with this repo


Run below command from root folder of API. Both client and server will get started.

```bash
docker-compose up
```

Client is at [port 4200](http://localhost:4200)

### How to configure Server port

```bash
Go to src -> environment -> environment.ts
Change the port number as per your requirement in
ANGULAR_BP_API_URL: 'http://localhost:port'
```
## Run Checkmarx & BlackDuck Scan

Branch starting with the name /scan, /sast and /oss will perform Checkmarx & BlackDuck Scan. To perform the scans changes need to be made in .circleci/config.yml.


* Start the branch name with 'sast' to initiate Checkmarx Scan.
```
- /sast\/.*/          # eg: sast/1, sast/prod 
```
* Start the branch name with 'oss' to initiate BlackDuck Scan.
```
- /oss\/.*/           # eg: oss/1, oss/prod 
```
* Start the branch name with 'scan' to initiate both Checkmarx & BlackDuck Scan.
```
- /scan\/.*/          # eg: scan/1, scan/prod  
```
