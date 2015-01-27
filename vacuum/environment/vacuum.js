var vacuumEnvironment = new Environment({
    class: environment,
    name: "vacuum",
    entities: {
        cleaner: {
            class: agent,
            type: "vacuum_sra",
            properties: { /* TODO Handle the number of instances of the same agent description (in the example, we can have more than one cleaner cleaning the environment) */
                position_x: {
                    type: integer,
                    range: [0,9]
                },
                position_y: {
                    type: integer,
                    range: [0,9]
                }
            },
            sensors: {
                /* TODO Define somehow how the elements affect the agent percepts */
            },
            effects: {
                suck: {
                    behavior: function() {
                        this.current_cell = environment.search('cell','cell','cell:position_x == this:position_x && position_y == cell:position_y');
                        this.current_cell.dirty = false;                        
                    }
                },
                move: {
                    behavior: function() {
                        /* TODO Define "move" behavior into the environment elements and the agent itself */
                    }
                }
            }
        },
        cell: { /* TODO Handle the number of instances of the same block description. In the example, we must have 100 cells (a 10x10 grid) */
            class: block,
            properties: {
                position_x: {
                    type: integer,
                    range: [0,9],
                    fixed: true
                },
                position_y: {
                    type: integer,
                    range: [0,9],
                    fixed: true
                },
                dirty: {
                    type: boolean /* TODO Handle somehow the simulation rules - The probability or redirtying, and time  */
                }
            }
        }
    }
});

var environments = [vacuumEnvironment];