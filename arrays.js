var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray() {
  chocolateBars = [...chocolateBars + 1];
return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift(+ 1);
}

function addElementToEndOfArray() {
  chocolateBars = [+ 1, ...chocolateBars];
}

function destructivelyAddElementToEndOfArray() {
  chocolateBars.push(+ 1);
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


