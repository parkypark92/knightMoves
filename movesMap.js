function legalMoves(coord) {
  let x = coord[0];
  let y = coord[1];
  let possibleMoves = [
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
  for (let move of possibleMoves) {
    if (move[0] >= 0 && move[1] >= 0 && move[0] <= 7 && move[1] <= 7) {
      legal.push(move);
    }
  }
  return legal;
}

function createGraph(start = [0, 0], adjList = new Map()) {
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

export const movesMap = createGraph();
