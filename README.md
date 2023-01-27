# Password Checker NODEJS + Typescript + Graphql

This password checker uses preset rules to determine wether the password being used is valid or not.
The preset rules are:  minSize, minUppercase, minLowercase, minDigit, minSpecialChars, noRepeted.

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version >=16.0.0


# Getting started
- Clone the repository
```
git clone  https://github.com/renatotabossi/password-checker <PROJECT_NAME>
```
- Install dependencies
```
cd <PROJECT_NAME>
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:3000`




## Testing
The tests are  written Jest 

```
"jest": "29.4.0",
"ts-jest": "^29.0.5"

```

### Running tests using NPM Scripts
````
npm run test

````
Test files are created under __test__ folder.


