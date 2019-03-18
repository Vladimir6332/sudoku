module.exports = function solveSudoku(matrix) {
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; i < matrix[i].length; j++) {
      if (matrix[i][j] == 0 ) {
        findCheckZeros(i,j)
      }
    }
  }

  function findCheckZeros(x,y) {
    let arrNumerous = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for ( let i = 0; i < 9; i++) {
      let positionX = arrNumerous.indexOf(matrix[x][i]);
      let positionY = arrNumerous.indexOf(matrix[i][y]);
      if  (positionX > -1) arrNumerous.splice(positionX, 1);
      if  (positionY > -1) arrNumerous.splice(positionY, 1)
    }
    for {}


  }
}
