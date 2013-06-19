tiny templater
===

Just about as simple as it gets.

## usage

````js
var templater = require('tiny-templater'),
    tpl = templater('hey, {{ name }}');

console.log(tpl({ name: 'buddy' }));
````

## notes

attempting to reference an undefined variable from within your template will render as 'undefined'.

## license

MIT
