# tiny-templater

[![Build Status](http://img.shields.io/travis/jarofghosts/tiny-templater.svg?style=flat-square)](https://travis-ci.org/jarofghosts/tiny-templater)
[![npm install](http://img.shields.io/npm/dm/tiny-templater.svg?style=flat-square)](https://www.npmjs.org/package/tiny-templater)
[![npm version](https://img.shields.io/npm/v/tiny-templater.svg?style=flat-square)](https://www.npmjs.org/package/tiny-templater)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![License](https://img.shields.io/npm/l/tiny-templater.svg?style=flat-square)](https://github.com/jarofghosts/tiny-templater/blob/master/LICENSE)

simple templating for simple needs

## usage

```javascript
var templater = require('tiny-templater')
var tpl = templater('hey, {{ name }}, {{ phrases.question }}?')

console.log(tpl({name: 'buddy', phrases: {question: 'what\'s the word?'}}))
// "hey, buddy, what's the word?"
```

## notes

attempting to reference an undefined variable from within your template will
render as an empty string.

## license

MIT
