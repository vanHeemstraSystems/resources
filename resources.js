/*
 * resources.js
 *
 * input: input - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function() {
  console.log('resources - called');
  var _Me = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths'); 
  var promise = require(path.join(paths.libraries, '/promise.js'));
  var _resource = require(__dirname+'/resource.js');
  var join = promise.join;
  return new promise(function(resolve) {
    join(_resource(), function(resource) {
      _Me.resource = resource;
    }); // eof join
    console.log('resources - resolve(_Me): ', _Me);
    resolve(_Me);
  }) // eof promise
  .catch(function(error) {
    console.log('resources - error: ', error);
  }) // eof catch
  .finally(function() {
    console.log('resources - finally');
  }); // eof finally
} // eof module