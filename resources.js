/*
 * resources.js
 *
 * Input param: uuid
 *
 * Returns: a Promise
 */
var path = require('../libraries/path');
var paths = require('../paths/paths');
// Bluebird has the incredibly useful functionality of enabling you to ‘promisfy’ modules which do not return promises. 
// For example, to promisfy the fs module, simply require bluebird and a promisified version of fs.
var Promise = require(path.join(paths.libraries, '/bluebird.js'));
//var fs = Promise.promisifyAll(require(path.join(paths.libraries, '/fs.js')));

module.exports = function(uuid) {
  console.log('Resources - called');
  var _Resources = {};
  // Create a new Promise
  return new Promise(function(resolve) {
	console.log('Resources - inside Promise');
	var resource = require('./'+uuid+'.js'); // A function that returns a Promise
	resource()
      .then(function(resource) {
        console.log('Resources - resource: ', resource);
        _Resources.resource = resource;
      });	
	console.log('Resources - resolve');	
	resolve(_Resources);  
  });
}
