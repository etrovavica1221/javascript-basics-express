/* eslint-disable radix */
const express = require('express');

const app = express();

app.use(express.json());

const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { 
  add, 
  subtract, 
  multiply, 
  divide, 
  remainder,
} = require('./lib/numbers');

const {
  negate,
  truthiness,
  isOdd,
  startsWith
} = require('./lib/booleans');

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('./lib/arrays')

// STRINGS

// sayHello

app.get('/strings/hello/:str', (req, res) => {
  const returnValue = sayHello(req.params.str);
  res.status(200).send({ result: returnValue });
});

// uppercase

app.get('/strings/upper/:str', (req, res) => {
  res.status(200).send({ result: uppercase(req.params.str) });
});

// lowercase

app.get('/strings/lower/:str', (req, res) => {
  res.status(200).send({ result: lowercase(req.params.str) });
});

// countCharacters

app.get('/strings/length/:str', (req, res) => {
  res.status(200).send({ result: countCharacters(req.params.str) });
});

// firstCharacter and firstCharacters

app.get('/strings/first-characters/:str', (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.status(200).send({ result: firstCharacter(req.params.str) });
  } else {
    res.status(200).send({ result: firstCharacters(req.params.str, req.query.length) });
  }
});

// NUMBERS

// add

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (isNaN(a) && isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

// subtract

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (isNaN(a) && isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(b, a) });
  }
});

// multiply

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/numbers/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (isNaN(a) && isNaN(b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: multiply(a, b) });
  }
});

// divide

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/numbers/divide', (req, res) => {
  if (req.body.b === 0 || req.body.b === '0') {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (req.body.a === 0 || req.body.b === '0') {
    res.status(200).send({ result: 0 });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (isNaN(a) && isNaN(b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: divide(a, b) });
  }
});

// remainder

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/numbers/remainder', (req, res) => {
  if (req.body.b === 0 || req.body.b === '0') {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (req.body.a === 0 || req.body.b === '0') {
    res.status(200).send({ result: 0 });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (isNaN(a) && isNaN(b)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: remainder(a, b) });
  }
});

// BOOLEANS

// negate

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/booleans/negate', (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
});

// truthiness

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/booleans/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
});

// is-odd

app.get('/booleans/is-odd/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).send({ result: isOdd(parseInt(req.params.number)) });
  }
});

// startsWith

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  if (req.params.character.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  } else {
  res.status(200).send({ result: startsWith(req.params.character, req.params.string) });
  }
});

//ARRAYS

// getNthElement

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200).send({ result: getNthElement(req.params.index, req.body.array) });
});

// arrayToString

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/arrays/to-string', (req, res) => {
  res.status(200).send({ result: arrayToCSVString(req.body.array) });
});

// addToArray2

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/arrays/append', (req, res) => {
  res.status(200).send({ result: addToArray2(req.body.value, req.body.array) });
});

// elementsStartingWithAVowel

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).send({ result: elementsStartingWithAVowel(req.body.array) });
});

// removeNthElement

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/arrays/remove-element', (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.status(200).send({ result: req.body.array.slice(1)});
  } else {
    res.status(200).send({ result: removeNthElement(req.query.index, req.body.array)});
  }
});

module.exports = app;
