### ES6 Basics
**`JavaScript`** **`ES6`**

#### Setup
##### Install NodeJS 12.11.x
(in your home directory):
```
sudo apt install nodejs -y
```
```
$ nodejs -v
v18.13.0
$ npm -v
9.2.0
```
##### Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

#### Configuration files
Add the files below to your project directory

##### `package.json`
```
{
  "scripts": {
    "lint": "eslint",
    "check-lint": "npm run lint [0-9]*.js",
    "dev": "babel-node",
    "test": "jest",
    "full-test": "npm run lint [0-9]*.js && npm test"
  },
  "devDependencies": {
    "@babel/core": "^7.17.0",
    "@babel/node": "^7.17.0",
    "@babel/preset-env": "^7.17.0",
    "eslint": "^7.32.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-jest": "^24.0.0",
    "jest": "^27.4.6"
  }
}
```

##### `babel.config.js`
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};
```

##### `.eslintrc.js`
```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement'
    ]
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js'
    }
  ]
};
```

Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.
