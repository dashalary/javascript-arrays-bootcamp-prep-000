var chocolateBars = ["snickers", "hundred frand", "kitkat", "skittles"];
function addElementToBeginningOfArray() {
  chocolateBars = [...chocolateBars, "Element"];
return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift("Element");
}

