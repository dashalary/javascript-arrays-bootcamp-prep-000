var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(n) {
  chocolateBars = [...chocolateBars, n];
return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(n) {
  chocolateBars.unshift("n");
}

function addElementToEndOfArray(n) {
  chocolateBars = [n, ...chocolateBars];
}

function destructivelyAddElementToEndOfArray(n) {
  chocolateBars.push("n");
}

function accessElementInArray(n) {
   console.log(chocolateBars[0]);
}

function destructivelyRemoveElementFromBeginningOfArray(n) {
  chocolateBars.unshift("n");
  return chocolateBars
}

function removeElementFromBeginningOfArray(n) {
  chocolateBars.slice(1);
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(n) {
  chocolateBars.pop();
  return chocolateBars
}

function removeElementFromEndOfArray(n) {
  chocolateBars.slice(0, chocolateBars.length - 1);
  return chocolateBars
}


