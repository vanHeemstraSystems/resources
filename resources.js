/*
 * resources.js
 *
 * input: uuid - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function(uuid) {
  console.log('Resources - called');
  var _Me = {};
  var path = require('../libraries/path'); //TEMP hard coded
  var paths = require('../paths/paths'); //TEMP hard coded
  var promise = require(path.join(paths.libraries, '/promise.js')); //TEMP hard coded
  var _resource = require('./'+uuid+'.js'); // A function that returns a Promise
  var join = promise.join;
  return new promise(function(resolve) {
    join(_resource(), function(resource) {
      _Me.resource = resource;
    }); // eof join
    console.log('resources - resolve(_Me): ', _Me);
    resolve(_Me);
  })
  .catch(function(error) {
    console.log('resources - error: ', error);
  })
  .finally(function() {
    console.log('resources - finally');
  }); // eof promise
}
