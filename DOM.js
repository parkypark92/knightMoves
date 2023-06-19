export const board = {};
for (let i = 0; i <= 7; i++) {
  for (let j = 0; j <= 7; j++) {
    let square = `${i},${j}`;
    board[square] = { prev: "", visited: false };
  }
}

const knight = { coord: "" };
