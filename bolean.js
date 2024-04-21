let k = 60,
  m = 200;

let operation = k > 30 && m < 230;
console.log("(" + k + ">30) && (" + m + "<130 ==" + operation);

operation = k > 30 || m < 130;
// console.log("(" + k + "> 30 || (" + m + "< 130) ==" + operation);
console.log(k < 30 || m > 230);

console.log("Operation = " + operation + "and Not Operation =" + !operation);
