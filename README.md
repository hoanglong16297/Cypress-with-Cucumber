# eoh-iot-dashboard-cypress
https://eohio.atlassian.net/wiki/spaces/T/pages/476413953/Cypress+Era+Web

Cypress is an open-source tool that helps to test web applications and ensure their stability and quality. It allows users to write test cases, view test results, and easily debug errors. Cypress supports writing tests in JavaScript and uses APIs to interact with the browser, helping users to accurately and quickly check the features of their web application.

## Local setup
1. Installing package
```
yarn install
```

## How to run

1. run Cypress in headless mode (for cicd)
a. how to run all case ?

```
yarn test
```

b. how to run detail case ?
example

```
yarn test --spec "cypress/integration/login.feature"
```

2 .run Cypress in non-headless mode (for dev and tester)

```
yarn cypress open
```

