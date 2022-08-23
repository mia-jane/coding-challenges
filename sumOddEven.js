function sumOddAndEven(arr) {
  return arr.reduce(
    (a, c) => {
      c % 2 === 0 ? (a[0] += c) : (a[1] += c);
      return a;
    },
    [0, 0]
  );
}

const test1 = [1, -2, 3, -4];
const summed = sumOddAndEven(test1);
console.log(summed);
