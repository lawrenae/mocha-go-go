var request = require('superagent'); 
var expect = require('expect.js');
var assert = require("assert")


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
    
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
