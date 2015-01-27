var cellBlock = new Block({
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

var cells = [];

for (var i = 0; i <= 9; i++) {
    cells[i] = [];
    for (var j = 0; j <= 9; j++) {
        cells[i][j] = clone(cellBlock);
        cells[i][j].position_x = i;
        cells[i][j].position_y = j;
        cells[i][j].dirty = false;
    }
}