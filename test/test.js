var template = require('../index.js'),
    assert = require('assert'),
    view = 'hello {{ world }} how is your {{ weekday }} going?',
    data = { world: 'dude', weekday: 'tuesday' },
    tpl = template(view);

// check it matches initial conditions
assert.equal(tpl(data), 'hello dude how is your tuesday going?');

// make sure it works for varied values
data = { world: 'lady', weekday: 'thursday' };

assert.equal(tpl(data), 'hello lady how is your thursday going?');

// return undefined for undefined values
data = { world: 'friendo' };

assert.equal(tpl(data), 'hello friendo how is your undefined going?');
