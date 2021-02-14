// Variables

const gameCanvas = document.getElementById("gameCanvas");
const boards = document.getElementsByClassName("board");
const solveButton = document.getElementById("solveButton");
let numberInputs = document.getElementsByClassName("number");

// Utils

const randNumGenerator = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const resetValues = () => {
  for (let i = 0; i < numberInputs.length; i++) {
    numberInput = numberInputs[i];
    numberInput.value = 0;
  }
};

const getBoardNumbers = (board) => {
  let array = [];
  for (let i = 0; i < board.children.length; i++) {
    const number = board.children[i];
    array.push(number.value);
  }
  return array;
};

const getRowNumbers = (row) => {
  let array = [];
  for (let i = 0; i < numberInputs.length; i++) {
    const number = numberInputs[i];
    if (number.getAttribute("row") == row) array.push(number.value);
  }
  return array;
};

const getColumnNumbers = (column) => {
  let array = [];
  for (let i = 0; i < numberInputs.length; i++) {
    const number = numberInputs[i];
    if (number.getAttribute("column") == column) array.push(number.value);
  }
  return array;
};

// Game Logic

const verifyRow = (inputIndex) => {
  row = numberInputs[inputIndex].getAttribute("row");
  return row;
};

const verifyColumn = (inputIndex) => {
  column = numberInputs[inputIndex].getAttribute("column");
  return column;
};

const verifyBoard = (inputIndex) => {
  const board = numberInputs[inputIndex].parentElement.getAttribute("board");
  return board;
};

const validateNumber = (inputIndex) => {
  const boardNumbers = getBoardNumbers(boards[verifyBoard(inputIndex)]);

  for (let i = 0; i < boardNumbers.length; i++) {
    const number = boardNumbers[i];
    const prev = boardNumbers[i - 1];
    const next = boardNumbers[i + 1];
    if (number == prev || number == next) {
      if (prev == 0 || next == 0) continue;
      return false;
    }
    // Repeated number
    else continue; // No repeats
  }

  const rowNumbers = getRowNumbers(verifyRow(inputIndex));

  for (let i = 0; i < rowNumbers.length; i++) {
    const number = rowNumbers[i];
    const prev = rowNumbers[i - 1];
    const next = rowNumbers[i + 1];
    if (number == prev || number == next) {
      if (prev == 0 || next == 0) continue;
      return false;
    }
  }

  const columnNumbers = getColumnNumbers(verifyColumn(inputIndex));

  for (let i = 0; i < columnNumbers.length; i++) {
    const number = rowNumbers[i];
    const prev = rowNumbers[i - 1];
    const next = rowNumbers[i + 1];
    if (number == prev || number == next) {
      if (prev == 0 || next == 0) continue;
      return false;
    }
  }

  return true; // No repeats
};

// Dev

const showIndexAsValue = () => {
  for (let i = 0; i < numberInputs.length; i++) {
    const numberInput = numberInputs[i];
    numberInput.value = i;
  }
};

console.log(validateNumber(6));
showIndexAsValue();
