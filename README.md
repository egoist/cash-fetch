# cash-fetch

[![NPM version](https://img.shields.io/npm/v/cash-fetch.svg?style=flat)](https://npmjs.com/package/cash-fetch) [![NPM downloads](https://img.shields.io/npm/dm/cash-fetch.svg?style=flat)](https://npmjs.com/package/cash-fetch) [![Build Status](https://img.shields.io/circleci/project/egoist/cash-fetch/master.svg?style=flat)](https://circleci.com/gh/egoist/cash-fetch) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Features

- Light-weight, 1KB for browser
- Isomorphic, for both browser and node.js
- Simple API, only GET and POST are supported
- Modern, similar to `window.fetch` API

## Install

```bash
$ npm install --save cash-fetch
```

## Usage

```js
const $fetch = require('cash-fetch')

$fetch('https://api.github.com/users/egoist')
  .then(data => data.json())
  .then(data => {
    console.log(data.login) //=> egoist
  })
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**cash-fetch** © [EGOIST](https://github.com/egoist), Released under the [MIT](https://egoist.mit-license.org/) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/cash-fetch/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
