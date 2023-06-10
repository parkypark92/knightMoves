const board = [];
for (let i = 0; i <= 7; i++) {
  for (let j = 0; j <= 7; j++) {
    let square = [i, j];
    board.push(square);
  }
}

const knight = { coord: [] };

function legalMoves(coord) {
  let x = coord[0];
  let y = coord[1];
  let allMoves = [
    [x + 1, y - 2],
    [x + 2, y - 1],
    [x + 2, y + 1],
    [x + 1, y + 2],
    [x - 1, y + 2],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x - 1, y - 2],
  ];
  let legal = [];
  for (let move of allMoves) {
    if (move[0] >= 0 && move[1] >= 0 && move[0] <= 7 && move[1] <= 7) {
      legal.push(move);
    }
  }
  return legal;
}

function createGraph(start, adjList = new Map()) {
  let nextMoves = legalMoves(start);
  let key = start.toString();
  adjList.set(key, nextMoves);
  for (let move of adjList.get(key)) {
    if (!adjList.has(move.toString())) {
      createGraph(move, adjList);
    }
  }
  return adjList;
}

console.log(createGraph([0, 0]));
