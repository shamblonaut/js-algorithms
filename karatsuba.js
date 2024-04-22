function padZero(s, n) {
  return s + "0".repeat(Math.floor(n));
}

function multiply(x, y, step) {
  x = x.toString();
  y = y.toString();

  const m = x.length > y.length ? y.length / 2 : x.length / 2;
  if (Math.floor(m) === 0) {
    if (x.length === 1 && y.length === 1) return Number(x) * Number(y);
    if (x.length === 1) return Number(x) * y[0] * 10 + Number(x) * y[1];
    if (y.length === 1) return Number(y) * x[0] * 10 + Number(y) * x[1];
  }

  const a = x.substring(0, Math.floor(m));
  const b = x.substring(Math.floor(m));
  const c = y.substring(0, Math.floor(m));
  const d = y.substring(Math.floor(m));

  const left = multiply(a, c);
  const right = multiply(b, d);
  const middle = multiply(Number(a) + Number(b), Number(c) + Number(d)) - left - right;

  return Number(padZero(multiply(a, c), 2 * Math.ceil(m))) + right + Number(padZero(middle, Math.ceil(m)));
}

const a = 12345;
const b = 32456;

const x = process.argv[2];
const y = process.argv[3];

const product = multiply(x ? x : a, y ? y : b);
console.log(product);
