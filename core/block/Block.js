/**
 * A Block
 * @param {Object} object
 * @constructor
 */
var Block = function(object) {

    this.class = object.class;

    for (var propertyName in object.properties) {
        var propertyDescription = object.properties[propertyName];
        switch (propertyDescription.type) {
            case integer:
                this[propertyName] = 0;
                break;
            case boolean:
                this[propertyName] = false;
                break;
            case string:
                this[propertyName] = "";
                break;
            default:
                this[propertyName] = null;
        }
    }

};

Block.prototype.class = "block";