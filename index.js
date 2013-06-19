var dotpather = require('dotpather');

function template(thing) {
  var str = thing.toString();
  return function (obj) {
    return str.replace(/\{\{\s*([a-zA-Z0-9_\.]+)\s*\}\}/g, function (chunk, word) {
      return dotpather(word)(obj);
    });
  }
}

module.exports = template;
