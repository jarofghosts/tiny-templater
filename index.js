module.exports = template

var dotpather = require('dotpather')

var templateRex = /\{\{\s*([\w_\.\d]+)\s*\}\}/g

function template(thing) {
  var str = thing.toString()

  return function templateGenerator(obj) {
    return str.replace(templateRex, templateLookup)

    function templateLookup(chunk, word) {
      return dotpather(word)(obj) || ''
    }
  }
}
