module.exports = template

var dotpather = require('dotpather')

function template(thing) {
  var str = thing.toString()
  return function template_generator(obj) {
    return str.replace(/\{\{\s*([\w_\.]+)\s*\}\}/g, template_lookup)

    function template_lookup(chunk, word) {
      return dotpather(word)(obj)
    }
  }
}
