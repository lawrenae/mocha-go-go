var request = require('superagent'); 
var expect = require('expect.js');


describe('basic stuff', function(){ 
    it('can connect to something', function(done){ 
        var agent = request.agent();
        agent.get('http://www.google.com/').end(function(res) {
            expect(res).to.exist;
            expect(res.status).to.equal(200);
            //expect(res.body).to.contain('Feeling');
            done();
        });
    }); 
}); 
    
