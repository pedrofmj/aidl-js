/**
 * An Environment
 * @param {Object} object
 * @constructor
 */
var Environment = function(object) {

    this.class = object.class;
    this.name = object.name;

    for (var key in object.entities) {
        this.entities[key] = object.entities[key];
    }

};

Environment.prototype.class = "environment";
Environment.prototype.name = "";
Environment.prototype.entities = {};