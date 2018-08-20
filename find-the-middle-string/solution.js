var gimme = function (inputArray) {
  const arrSum = inputArray[0]+inputArray[1]+inputArray[2];
  const minNum = Math.min.apply(null, inputArray);
  const maxNum = Math.max.apply(null, inputArray);
  const median = arrSum-minNum-maxNum;
  return inputArray.indexOf(median);;
}