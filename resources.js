/*
 * resources.js
 */
var ResourcesResource = require(__dirname+'/resource.js');

/**
 * Create a new Resources that let users create sub-resources.
 * @return {Resources}
 */
function Resources() { }

/**
 * Create a new ResourcesResource object.
 * @return {ResourcesResource}
 */
Resources.prototype.resource = function() {
  return new ResourcesResource();
}

//ORIGINAL module.exports = new Resources();
module.exports = function() { return new Resources(); }
