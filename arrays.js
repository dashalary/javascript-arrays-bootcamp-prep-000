var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, candy) {
  return [candyString, ...chocolateBars];

}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift(candyString);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candy) {
  return [...chocolateBars, candy];
}

function destructivelyAddElementToEndOfArray(n) {
  chocolateBars.push(candy);
}

function accessElementInArray(array, index) {
   return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}


