function sudoku(puzzle) {

}

function solve(puzzle) {
	for (let i = 1; i < 10; i++) {


	}
}


function fillFirst(puzzle, number) {
	let newPuzzle = [];
	for (let i = 0; i < puzzle.length; i++)
		newPuzzle[i] = puzzle[i].slice();
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (newPuzzle[i][j] === 0) {
				newPuzzle[i][j] = number;
				return newPuzzle;
			}
		}
	}
}