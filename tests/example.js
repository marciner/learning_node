var assert = require('assert');

describe('String#split', function(){
    it('powienien zwrocic tablice', function(){
    assert(Array.isArray('a,c,b'.split(',')));
    });
});