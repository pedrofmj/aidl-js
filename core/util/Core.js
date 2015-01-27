function clone(object) {

    var result = {};

    for (var key in object) {
        result[key] = object[key];
    }

    return this;

};
