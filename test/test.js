var template = require('../index.js'),
    assert = require('assert'),
    view = 'hello {{ world }} how is your {{ weekday }} going?',
    data = {
             world: 'dude',
             weekday: 'tuesday'
           },
    tpl = template(view);

assert.equal(tpl(data), 'hello dude how is your tuesday going?');
