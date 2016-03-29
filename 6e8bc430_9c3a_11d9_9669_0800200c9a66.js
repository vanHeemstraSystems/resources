/*
 * 6e8bc430_9c3a_11d9_9669_0800200c9a66
 * 
 */
var path = require('../libraries/path');
var paths = require('../paths/paths');
// Bluebird has the incredibly useful functionality of enabling you to ‘promisfy’ modules which do not return promises. 
// For example, to promisfy the fs module, simply require bluebird and a promisified version of fs.
var Promise = require(path.join(paths.libraries, '/bluebird.js'));
//var fs = Promise.promisifyAll(require(path.join(paths.libraries, '/fs.js')));

module.exports = function() {
  console.log('6e8bc430_9c3a_11d9_9669_0800200c9a66 - called');
  var _6e8bc430_9c3a_11d9_9669_0800200c9a66 = {};
  // Create a new Promise
  return new Promise(function(resolve) {
	console.log('6e8bc430_9c3a_11d9_9669_0800200c9a66 - inside Promise');
    _6e8bc430_9c3a_11d9_9669_0800200c9a66 = {
      URI : 'urn:uuid:6e8bc430_9c3a_11d9_9669_0800200c9a66' // put your URI here
    }; 
	console.log('6e8bc430_9c3a_11d9_9669_0800200c9a66 - resolve');	
	resolve(_6e8bc430_9c3a_11d9_9669_0800200c9a66);   
  });
}