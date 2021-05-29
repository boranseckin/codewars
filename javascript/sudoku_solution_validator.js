function validSolution(board) {
    let valid = true;

    // Validate rows and columns
    for (let i = 0; i < 9; i += 1) {
        const row = new Set();
        const col = new Set();

        for (let j = 0; j < 9; j += 1) {
            row.add(board[i][j]);
            col.add(board[j][i]);
        }

        if (row.size !== 9 || col.size !== 9) valid = false;
    }

    // Validate blocks
    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            let row = 0, col = 0;
            const block = new Set();
            
            while (row !== 3 && col !== 3) {
                block.add(board[row + (i * 3)][col + (j * 3)]);
                col += 1;
                if (col === 3) col = 0, row += 1;
            }
    
            if (block.size !== 9) valid = false;
        }
    }

    return valid;
}
