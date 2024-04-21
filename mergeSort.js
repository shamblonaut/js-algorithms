function sort(array) {
  if (array.length <= 1) return array;
  
  const a = sort(array.slice(0, array.length / 2));
  const b = sort(array.slice(array.length / 2));
  
  let sorted = [];
  while(a[0] || b[0]) {
    sorted.push(a[0] > b[0] ? b.shift() : a.shift());
    if (!a[0] && b[0]) {
      sorted = sorted.concat(b);
      break;
    }
  }
  return sorted;
}

let a = [3, 5, 1, 9, 4, 2, 8, 6, 10, 7];
console.log(sort(a));
