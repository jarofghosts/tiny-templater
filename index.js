module.exports = template

var dotpather = require('dotpather'),
    template_rex = /\{\{\s*([\w_\.]+)\s*\}\}/g

function template(thing) {
  var str = thing.toString()
  return function template_generator(obj) {
    return str.replace(template_rex, template_lookup)

    function template_lookup(chunk, word) {
      return dotpather(word)(obj)
    }
  }
}
