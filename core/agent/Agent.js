/**
 * An Agent
 * @param {Object} object
 * @constructor
 */
var Agent = function(object) {

    this.class = object.class;
    this.type = object.type;
    this.name = object.name;
    for (var key in object.percepts) {
        this.percepts[key] = object.percepts[key];
    }

    for (var key in object.effects.actions) {
        this.effects.actions[key] = object.effects.actions[key];
    }

    for (var key in object.behavior) {
        this.behavior[key] = object.behavior[key];
    }
};

Agent.prototype.class = "agent";
Agent.prototype.type = "";
Agent.prototype.name = "";
Agent.prototype.percepts = {};
Agent.prototype.effects = { actions: {} };
Agent.prototype.behavior = {};


