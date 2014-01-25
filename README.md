tiny-templater
===

[![Build Status](https://travis-ci.org/jarofghosts/tiny-templater.png?branch=master)](https://travis-ci.org/jarofghosts/tiny-templater)

Just about as simple as it gets.

## usage

```js
var templater = require('tiny-templater'),
    tpl = templater('hey, {{ name }}, {{ phrases.question }}?')

console.log(tpl({ name: 'buddy', phrases: { question: 'what\'s the word?'}}))
// "hey, buddy, what's the word?"
```

## notes

attempting to reference an undefined variable from within your template will
render as 'undefined'.

## license

MIT
