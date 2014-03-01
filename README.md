tiny-templater
===

[![Build Status](https://travis-ci.org/jarofghosts/tiny-templater.png?branch=master)](https://travis-ci.org/jarofghosts/tiny-templater)

simple templating for simple needs

## usage

```js
var templater = require('tiny-templater'),
    tpl = templater('hey, {{ name }}, {{ phrases.question }}?')

console.log(tpl({ name: 'buddy', phrases: { question: 'what\'s the word?'}}))
// "hey, buddy, what's the word?"
```

## notes

attempting to reference an undefined variable from within your template will
render as ''.

## license

MIT
