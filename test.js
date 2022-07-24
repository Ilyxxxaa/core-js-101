function swapHeadAndTail(arr) {
  const middle = Math.ceil(arr.length / 2);
  let result = [];
  if (arr.length % 2 === 0) {
    const firstHalf = arr.slice(0, middle);
    const secondHalf = arr.slice(middle, arr.length);
    const newArr = secondHalf.concat(firstHalf);
    result = newArr;
  } else {
    const firstHalf = arr.slice(0, middle - 1);
    const secondHalf = arr.slice(middle, arr.length);
    const middleRes = arr.slice(middle - 1, middle);
    const newArr = secondHalf.concat(middleRes).concat(firstHalf);
    result = newArr;
  }
  console.log(result);
  return result;
}

swapHeadAndTail([1, 2, 3]);
