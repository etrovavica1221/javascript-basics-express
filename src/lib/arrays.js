const getNthElement = (index, array) => {
  return array[index%array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
  return array;
};

const addToArray2 = (element, array) => {
  const newArray = array.concat([]);
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter(number => number%2 === 0);
};

const removeNthElementNewArray = (index, array) => {
  const arr = [...array];
  arr.splice(index, 1);
  return arr;
};

const elementsStartingWithAVowel = strings => {
  const regExStr = /[aouie]/gi;
  const newStrings = [];
  strings.forEach(string => {
    if (regExStr.exec(string[0])) {
      newStrings.push(string);
    }
  });
  return newStrings;
};

const removeSpaces = string => {
  const arr = string.split('');
  const nospace = arr.filter(item => item !== ' ');
  return nospace.join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((n1,n2) => n1 + n2, 0);
};

const sortByLastLetter = strings => {
  const sorted = strings.sort(function(a,b) {
  const lastA = a.charAt(a.length - 1);
  const lastB = b.charAt(b.length - 1);
  if (lastA > lastB) {
    return 1;
  } else if (lastA < lastB) {
    return -1;
  } else {
    return 0;
  } 
});

  return sorted;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElementNewArray,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
