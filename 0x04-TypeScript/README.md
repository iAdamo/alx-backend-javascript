### Typescript
**`JavaScript`** **`TypeScript`**

### Configuration Files
Please use these files for the following tasks

#### **package.json**
```json
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.15.0",
    "@babel/preset-typescript": "^7.16.0",
    "@types/jest": "^27.0.0",
    "@typescript-eslint/eslint-plugin": "^5.5.0",
    "@typescript-eslint/parser": "^5.5.0",
    "clean-webpack-plugin": "^4.0.0",
    "fork-ts-checker-webpack-plugin": "^6.4.1",
    "html-webpack-plugin": "^5.5.0",
    "jest": "^27.4.7",
    "source-map": "^0.7.3",
    "ts-jest": "^27.0.7",
    "ts-loader": "^9.2.5",
    "typescript": "^4.5.4",
    "webpack": "^5.68.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.8.1"
  }
}
```
#### **.eslintrc.js**
```javascript
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
```
#### **tsconfig.json**
```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "ESNext",
    "target": "ES5",
    "allowJs": true,
    "moduleResolution": "node",
    "skipLibCheck": true
  }
}
```
#### **webpack.config.js**
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './js/main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Run `npm install` to get all the dependencies installed.

### Tasks
0) ### **Creating an interface for a student**

Copy the following configuration files (provided above) into the task_0 directory: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`

Write your code in the main.ts file:

- Write an interface named Student that accepts the following elements: ``firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`
- Create two students, and create an array named `studentsList` containing the two variables
- Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
- Each row should contain the first name of the student and the location
Requirements:

- When running, Webpack should return `No type errors found`.
- Every variable should use TypeScript when possible.

1) #### **Let's build a Teacher interface**

Create a directory `task_1` and copy these configuration files into this folder: `package.json`, `tsconfig.json`, `webpack.config.js`

- `firstName(string)` and `lastName(string)`. These two attributes should only be modifiable when a Teacher is first initialized
- `fullTimeEmployee(boolean)` this attribute should always be defined
- `yearsOfExperience(number)` this attribute is optional
- `location(string)` this attribute should always be defined
- Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute
Example:
```typescript
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
```

2) ### **Extending the Teacher class**

Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`

Example:
```typescript
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
```

3) #### **Printing teachers**

Write a function `printTeacher`:

It accepts two arguments `firstName` and `lastName`
It returns the first letter of the firstName and the full lastName
Example: `printTeacher("John", "Doe") -> J. Doe`
Write an interface for the function named `printTeacherFunction`.
