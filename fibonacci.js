function fibs(n) {
  if (n <= 1) return [0];

  let fib = [0, 1];
  for (let i = 3; i <= n; i++) {
    fib.push(fib[i - 3] + fib[i - 2]);
  }
  return fib;
}

function fibsRec(n) {
  if (n <= 1) return [0];
  if (n === 2) return [0, 1];
  
  let a = fibsRec(n - 2);
  let b = fibsRec(n - 1);
  b.push(a[a.length - 1] + b[b.length - 1]);
  return b;
}

const n = Number(process.argv[2]);
console.log("Iterative result: " + fibs(n));
console.log("Recursive result: " + fibsRec(n));
