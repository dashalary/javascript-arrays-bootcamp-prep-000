var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray() {
  chocolateBars = [...chocolateBars, "Element"];
return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift("Element");
}

function addElementToEndOfArray () {
  chocolateBars = ["Element", ...chocolateBars];
}

function destructivelyAddElementToEndOfArray () {
  chocolateBars.push("Element");
}

function accessElementInArray () {
   console.log(chocolateBars[0]);
}

function destructivelyRemoveElementFromBeginningOfArray () {
  chocolateBars.unshift();
  return chocolateBars
}
