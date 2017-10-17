# begin-linting
## Eslint
#### npm script
```json
{
  "scripts": {
    "lint": "eslint --ignore-path .gitignore --format=node_modules/eslint-formatter-pretty ./"
  }
}
```

**Example**  
```js
module.exports = require('begin-linting');
```

### Server-side
#### For Node

**Example**  
```js
module.exports = require('begin-linting/node');
```

### Client-side
#### For [Webpack](https://webpack.js.org/)

**Example**  
```js
module.exports = require('begin-linting/webpack');
```

### Testing
#### For [Ava](http://ava.li)

**Example**  
```js
module.exports = require('begin-linting/ava');
```

## pug-lint
#### npm script
```json
{
  "scripts": {
    "lint:pug": "pug-lint --reporter node_modules/puglint-stylish src/"
  }
}
```

**Example**  
```js
module.exports = require('begin-linting/pug');
```

