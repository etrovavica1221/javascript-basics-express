/* eslint-disable radix */
const express = require('express');

const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const app = express();

// strings

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

// numbers

// add

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (Number.isNaN(a) && Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

// subtract

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (Number.isNaN(a) && Number.isNaN(b)) {
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

  if (Number.isNaN(a) && Number.isNaN(b)) {
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

  if (Number.isNaN(a) && Number.isNaN(b)) {
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

  if (Number.isNaN(a) && Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: remainder(a, b) });
  }
});

module.exports = app;
