var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(n) {
  chocolateBars = [...chocolateBars, n];
return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(n) {
  chocolateBars.unshift();
}

function addElementToEndOfArray(n) {
  chocolateBars = [n, ...chocolateBars];
}

function destructivelyAddElementToEndOfArray() {
  chocolateBars.push(n);
}

function accessElementInArray() {
   console.log(chocolateBars[0]);
}

function destructivelyRemoveElementFromBeginningOfArray() {
  chocolateBars.unshift();
  return chocolateBars
}

function removeElementFromBeginningOfArray() {
  chocolateBars.slice(1);
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray() {
  chocolateBars.pop();
  return chocolateBars
}

function removeElementFromEndOfArray() {
  chocolateBars.slice(0, chocolateBars.length - 1);
  return chocolateBars
}


