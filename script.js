var uno = "uno";
let dos = "dos";
const tres = "tres";

console.log(`Count: ${uno}, ${dos}, ${tres}`);

const nmb = 41;
const strNr = nmb.toString();
const num1 = +strNr;
const num2 = Number(strNr);
const num3 = parseInt(strNr);
const bool = Boolean(strNr);

console.log(typeof nrStr, typeof num3, num1 + num2 + num3);

const falsy1 = null;
const falsy2 = undefined;
const falsy3 = false;
const falsy4 = NaN;
const falsy5 = 0;
const falsy6 = "";

if (falsy1 && nmb) {
  console.log("True");
} else if (falsy5 || falsy6) {
  console.log("True2");
} else if (falsy1 === falsy2) {
  console.log("True3");
} else if (nmb >= num3) {
  console.log("True4");
} else {
  console.log("False");
}
