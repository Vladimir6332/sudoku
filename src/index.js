module.exports = function solveSudoku(matrix) {

    function check(matrix) {
        let newMatrix = JSON.parse(JSON.stringify(matrix));
        let counterZeros = 0;

        for (let i = 0; i < newMatrix.length; i++) {
            for (let j = 0; j < newMatrix[i].length; j++) {
                if (newMatrix[i][j] == 0) {
                    counterZeros++;
                    let arrNumerous = checkZeros(i, j, newMatrix);
                    if (arrNumerous.length == 0) return false;
                    else {
                        for (let x = 0; x < arrNumerous.length; x++) {
                            newMatrix[i][j] = arrNumerous[x];
                            let checkedMatrix = check(newMatrix);
                            if (checkedMatrix) return checkedMatrix;
                        }
                        return false


                    }
                }
            }
        }
        if (counterZeros == 0) return newMatrix;

    }



    function checkZeros(x, y, matrix) {
        let arrNumerous = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < 9; i++) {
            let positionX = arrNumerous.indexOf(matrix[x][i]);
            if (positionX > -1) arrNumerous.splice(positionX, 1);
            let positionY = arrNumerous.indexOf(matrix[i][y]);
            if (positionY > -1) arrNumerous.splice(positionY, 1);
        }
        let startPositionX = x - x % 3;
        let startPositionY = y - y % 3;
        for (let i = startPositionX; i < startPositionX + 3; i++) {
            for (let j = startPositionY; j < startPositionY + 3; j++) {
                let position = arrNumerous.indexOf(matrix[i][j]);
                if (position > -1) arrNumerous.splice(position, 1);
            }
        }
        return arrNumerous.slice()

    }

    return check(matrix)
}