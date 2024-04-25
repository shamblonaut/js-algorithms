export function search(array, target) {
  let steps = 0;
  let lower = 0,
    upper = array.length - 1;
  while (lower <= upper) {
    let index = Math.floor(lower + (upper - lower) / 2);
    if (array[index] === target) {
      return { index, steps };
    } else if (array[index] < target) lower = index + 1;
    else upper = index - 1;
    steps++;
  }
  return { index: undefined, steps };
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = Number(process.argv[2]);

const s = search(a, n);
if (s.index) {
  console.log(`${n} was found at index ${s.index} in ${s.steps} steps`);
} else {
  console.log(
    `${n} was not found in the array. Search completed in ${s.steps} steps`,
  );
}
