function multiply(a, b) {
  if (a.length < 1 || b.length < 1) return;
  else if (Number(a) === 0 || Number(b) === 0) return "0";
  else if (Number(a) === 1) return b;
  else if (Number(b) === 1) return a;
  else if (a.length == 1 && b.length == 1) return (Number(a) * Number(b)).toString();
  else if (a.length == 1) return multiply(b, a);

  let finalProduct = "";
  let carry = "0";
  for (let i = a.length - 1; i >= 0; i--) {
    const product = multiply(b, a[i]);
    const carryAdded = add(product[product.length - 1], carry);
    finalProduct = carryAdded[carryAdded.length - 1] + finalProduct;
    
    const leftOverProduct = product.length > 1 ? product.substring(0, product.length - 1) : "0";
    const leftOverCarry = carryAdded.length > 1 ? carryAdded.substring(0, carryAdded.length - 1) : "0";
    carry = add(leftOverProduct, leftOverCarry);
  }
  if (carry !== "0") finalProduct = carry + finalProduct;

  return finalProduct;
}

function add(...args) {
  if (!args) return "0";

  const larger = args[findMaxIndex(args)];

  let sum = "";
  let carry = BigInt(0);
  for (let i = 0; i < larger.length; i++) {
    let columnSum = carry;
    for (let j = 0; j < args.length; j++) {
      const c = args[j][args[j].length - 1 - i];
      columnSum += c ? BigInt(c) : BigInt(0);;
    }
    columnSum = columnSum.toString();
    sum = columnSum[columnSum.length - 1] + sum;
    carry = BigInt(columnSum.substring(0, columnSum.length - 1));
  }
  if (carry) sum = carry.toString() + sum;

  return sum;
}

function findMaxIndex(a) {
  let max;
  for (let i = 0; i < a.length; i++) {
    if (max === undefined || a[i].length > a[max].length) max = i;
  }
  return max;
}

let a = "9226983090495358799498674353697058110463656843086458502279084066874505225380360376132818231899745943";
let b = "5449675743109474564442669327447639630580480335902347820671271610144377555186774062475786584219560636";

let x = process.argv[2];
let y = process.argv[3];

let product = multiply(x ? x: a, y ? y : b).replace(/^0+/, "");
console.log(product);
