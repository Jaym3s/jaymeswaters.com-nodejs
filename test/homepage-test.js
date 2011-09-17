var vows = require('vows')
  , zombie = require('zombie')
  , assert = require('assert')
  , suite = vows.describe('homepage')
  ;

suite.addBatch({
  'when the page loads': {
    topic: function () {
      browser = new zombie.Browser({ debug: false });
      browser.runScripts = false;
      browser.on('error',function (err){console.log(err.stack)});
      browser.on('done',function (done){console.log(done.document.cookie)});
      browser.visit('http://localhost:3000/', this.callback);
    }
    , 'Response should be 200': function(browser) {
      assert.equal(browser.statusCode, '200');
    }
  }
}).export(module);
