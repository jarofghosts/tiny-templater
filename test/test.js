var template = require('../index.js')
    assert = require('assert')

var view = 'hello {{ world }} how is your {{ weekday }} going?'
  , data = {
        world: 'dude'
      , weekday: 'tuesday'
  }
  , view2 = '{{ person.name }} how is your {{ week.day }}?'
  , view3 = '{{ greeting }}, {{ person.name }} or "' +
        '{{ person.nicknames.favorite }}": how is your {{ week.day }}?'
  , view4 = '{{ greeting1 }}'
  , data2 = {
        greeting: 'hey'
      , person: {
            name: 'Robert'
          , nicknames: {favorite: 'Robbie'}
      }
      , week: {day: 'Friday'}
  }
  , data4 = {greeting1: 'haha!'}
  , tpl = template(view)
  , tpl2 = template(view2)
  , tpl3 = template(view3)
  , tpl4 = template(view4)

// check it matches initial conditions
assert.equal(tpl(data), 'hello dude how is your tuesday going?')

// make sure it works for varied values
data = { world: 'lady', weekday: 'thursday' }

assert.equal(tpl(data), 'hello lady how is your thursday going?')

// return undefined for undefined values
data = { world: 'friendo' }

assert.equal(tpl(data), 'hello friendo how is your  going?')

// check deep object notation
assert.equal(tpl2(data2), 'Robert how is your Friday?')

// verify differing levels work
assert.equal(tpl3(data2), 'hey, Robert or "Robbie": how is your Friday?')

// should also work when numbers are present in property name
assert.equal(tpl4(data4), 'haha!')
