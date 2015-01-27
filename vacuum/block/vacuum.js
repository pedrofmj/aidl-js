var cellBlock = new Block({ /* TODO Handle the number of instances of the same block description. In the example, we must have 100 cells (a 10x10 grid) */
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
});

var blocks = [cellBlock];