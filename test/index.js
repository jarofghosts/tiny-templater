var test = require('tape')

var template = require('../')

test('replaces mustaches with context', function(t) {
  var tpl = template('hello {{ name }}')

  t.plan(2)

  t.equal(tpl({name: 'snorlax'}), 'hello snorlax')
  t.equal(tpl({name: 'ditto'}), 'hello ditto')
})

test('returns empty string if undefined', function(t) {
  var tpl = template('hello {{ name }}')

  t.plan(1)

  t.equal(tpl({}), 'hello ')
})

test('does deep property lookup', function(t) {
  var tpl = template('hello {{ user.name }}, {{ word }}')

  t.plan(2)

  t.equal(tpl({user: {name: 'mew'}, word: 'two'}), 'hello mew, two')
  t.equal(tpl(), 'hello , ')
})
