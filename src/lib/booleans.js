const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a&&b;
};

const either = (a, b) => {
  return (a || b);
};

const none = (a, b) => {
  if(a === false && b === false) {
	return true;
  } else {
	return false;
 } 
};

const one = (a, b) => {
  if(a === true && b === false || b === true && a === false) {
	return true;
  } else {
	return false;
 }
};

const truthiness = a => {
	return !!a;
};

const isEqual = (a, b) => {
  return a===b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
	if (a%2 === 1) {
	return true;
   } else { 
	return false;
 };
};

const isEven = a => {
  	if (a%2 === 0) {
	return true;
   } else { 
	return false;
 };
};

const isSquare = a => {
	return a >= 0 && Math.sqrt(a)%1 === 0;
};

const startsWith = (char, string) => {
  if (char === string.charAt(0)) {
	return true;
  } else {
	return false;
 };
};

const containsVowels = string => {
const regex = /[aeoui]/gi;
	return regex.test(string);
};

const isLowerCase = string => {
const regex = /[A-Z]/g;
	if (regex.test(string)) {
	return false;
  } else {
   return true;
 }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
