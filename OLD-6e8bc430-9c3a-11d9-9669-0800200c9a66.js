/*
 * Resource: 6e8bc430-9c3a-11d9-9669-0800200c9a66
 * 
 */
module.exports = function() {
  console.log('resource: 6e8bc430-9c3a-11d9-9669-0800200c9a66 - called');
  var _Me = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  var promise = require(path.join(paths.libraries, '/promise.js'));
  // Create a new Promise
  return new promise(function(resolve) {
	  console.log('resource: 6e8bc430-9c3a-11d9-9669-0800200c9a66 - inside Promise');
    _Me = {
      URI : 'urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66'
    }; 
	  console.log('resource: 6e8bc430-9c3a-11d9-9669-0800200c9a66 - resolve');
	  resolve(_Me); 
  });
}