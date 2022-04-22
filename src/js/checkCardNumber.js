export default function checkCardNumber(number) {
  const toCheck = +number.slice(-1);
  const array = number
    .split('')
    .splice(0, number.lastIndexOf(toCheck))
    .reverse()
    .map((x) => parseInt(x, 10));
  const sum = array.reduce((acc, val, ind) => {
    if (ind % 2 === 0) {
      return acc + (val * 2 > 9 ? val * 2 - 9 : val * 2);
    }
    return acc + val;
  }, 0);

  return (toCheck + sum) % 10 === 0;
}
