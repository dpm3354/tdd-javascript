    
# Project Setup


### Project Setup

Before starting the install process, check to see what is already installed. At command line type to verify tool installation:

```
node -v
npm -v
npm jest -v
```

#### Install Tools:
- [Install Node](https://nodejs.org/en/download/package-manager/)
- [Install Jest](https://jestjs.io/docs/en/getting-started)

#### Quick install using dev dependencies in package.json
```
npm install
```


#### Validate Installations
At command line type to verify tool installation:

```
node -v
npm -v
npm jest -v
```

#### Run Tests

Run all tests:
```
npm test
```

Run singular test:
```
npm test path/to/test.test.js
```
Example: 
```
npm test test/Fibonacci/fibonacci.test.js

```


Run tests with coverage:

```
npm run coverage
```
