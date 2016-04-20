/*
 * Resource: 6e8bc430-9c3a-11d9-9669-0800200c9a66
 * 
 */
var path = require('../libraries/path');
var paths = require('../paths/paths');
// Bluebird has the incredibly useful functionality of enabling you to ‘promisfy’ modules which do not return promises. 
// For example, to promisfy the fs module, simply require bluebird and a promisified version of fs.
var Promise = require(path.join(paths.libraries, '/promise.js'));
//var fs = Promise.promisifyAll(require(path.join(paths.libraries, '/fs.js')));

module.exports = function() {
  console.log('Resource: 6e8bc430-9c3a-11d9-9669-0800200c9a66 - called');
  var _Resource = {};
  // Create a new Promise
  return new Promise(function(resolve) {
	  console.log('Resource: 6e8bc430-9c3a-11d9-9669-0800200c9a66 - inside Promise');
    _Resource = {
      URI : 'urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66'
    }; 
	  console.log('Resource: 6e8bc430-9c3a-11d9-9669-0800200c9a66 - resolve');
	  resolve(_Resource); 
  });
}