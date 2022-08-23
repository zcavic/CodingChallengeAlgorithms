// 119. Pascal's Triangle II

const getRow = (rowIndex) => {
    const calcNextRow = (row) => {
        if (rowIndex == 0) return row;
        else if (row.length == 0) return calcNextRow([1], rowIndex--);
        else if (row.length == 1) return calcNextRow([1, 1], rowIndex--);
        const nextRow = [1];
        for (let i = 1; i < row.length; i++) {
            nextRow.push(row[i - 1] + row[i]);
        }
        nextRow.push(1);
        return calcNextRow(nextRow, rowIndex--);
    };
    return calcNextRow([1]);
};

const temp = getRow(100);
console.log(temp);
