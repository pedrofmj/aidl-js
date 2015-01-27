var vacuumSimpleReflexAgent = new Agent({
    class: agent,
    type: "simple_reflex_agent",
    name: "vacuum_sra",
    percepts: {
        dirty: { /* TODO Define this percept */ }
    },
    effects: {
        actions: {
            suck: {
                parameters: {}
            },
            move: {
                parameters: {
                    direction: {
                        type: "enum",
                        values: [
                            "up",
                            "down",
                            "left",
                            "right",
                            "random"
                        ]
                    }
                }
            }
        }
    },
    behavior: {
        rules: [
            {
                condition: {
                    dirty: true
                },
                action: {
                    suck: {}
                }
            },
            {
                condition: {
                    dirty: false
                },
                action: {
                    move: {
                        direction: "random"
                    }
                }
            }
        ]
    }
});

var agents = [vacuumSimpleReflexAgent];