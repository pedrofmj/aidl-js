Object.prototype.clone = function() {

    var result = this.constructor();

    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            result[key] = this[key];
        }
    }

    return result;

};
