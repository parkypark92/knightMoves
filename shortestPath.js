import { movesMap } from "./movesMap.js";
import { board } from "./DOM.js";

export function findShortestPath(start, dest) {
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
  for (let move of path) {
    console.log(move);
  }
}
