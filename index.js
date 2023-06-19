const board = {};
for (let i = 0; i <= 7; i++) {
  for (let j = 0; j <= 7; j++) {
    let square = `${i},${j}`;
    board[square] = { prev: "", visited: false };
  }
}

const knight = { coord: "" };

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

const movesMap = createGraph();

function findShortestPath(start, dest) {
  let startPosition = start.toString();
  let endPosition = dest.toString();
  let q = [startPosition];
  while (q.length !== 0) {
    let current = q.shift();
    board[current].visited = true;
    if (current === endPosition) {
      return printPath(startPosition, endPosition);
    }
    for (let move of movesMap.get(current)) {
      let coords = move.toString();
      if (!board[coords].visited) {
        board[coords].prev = current;
        q.push(coords);
      }
    }
  }
}

function printPath(start, end) {
  let path = [];
  let coord = end;
  while (board[coord].prev !== "") {
    path.unshift(coord);
    coord = board[coord].prev;
  }
  path.unshift(start);
  console.log(path);
  for (let move of path) {
    console.log(move);
  }
}

findShortestPath([3, 3], [6, 5]);
