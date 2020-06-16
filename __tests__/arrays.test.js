const request = require('supertest');
const app = require('../src/app');

describe('/arrays', () => {
  describe('POST /element-at-index/{index}', () => {
    it('returns the element at the given index', done => {
      request(app)
        .post('/arrays/element-at-index/2')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'elephant' });
          done();
        });
    });
  });

  describe('POST /to-string', () => {
    it('returns the stringified array', done => {
      request(app)
        .post('/arrays/to-string')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'cat,dog,elephant,fox' });
          done();
        });
    });
  });

  describe('POST /append', () => {
    it('returns an array with the value appended', done => {
      request(app)
        .post('/arrays/append')
        .send({
          array: ['cat', 'dog', 'elephant', 'fox'],
          value: 'gorilla',
        })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ['cat', 'dog', 'elephant', 'fox', 'gorilla'] });
          done();
        });
    });
  });

  describe('POST /add', () => {
    it('adds the item to the end of the array', done => {
      request(app)
        .post('/arrays/add')
        .send({
          array: ['cat', 'dog', 'elephant', 'fox'],
          value: 'gorilla',
        })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ['cat', 'dog', 'elephant', 'fox', 'gorilla'] });
          done();
        });
    });
  });

  describe('POST /starts-with-vowel', () => {
    it('returns a filtered array of elements starting with a vowel', done => {
      request(app)
        .post('/arrays/starts-with-vowel')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ['elephant'] });
          done();
        });
    });
  });

  describe('POST /remove-element?index={index}', () => {
    it('returns an array with the first element removed', done => {
      request(app)
        .post('/arrays/remove-element')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ['dog', 'elephant', 'fox'] });
          done();
        });
    });

    it('returns an array with the element at the given index removed', done => {
      request(app)
        .post('/arrays/remove-element')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .query({ index: 2 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ['cat', 'dog', 'fox'] });
          done();
        });
    });
  });

  describe('POST /to-array', () => {
    it('converts the csv string as an array', done => {
      request(app)
        .post('/arrays/to-array')
        .send({ string: "a,b,c,d" })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ["a", "b", "c", "d"] });
          done();
        });
    });
  });

  describe('POST /numbersToStrings', () => {
    it('converts every number in the array to a string', done => {
      request(app)
        .post('/arrays/numbersToStrings')
        .send({ array: [1, 2, 3] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ["1", "2", "3"] });
          done();
        });
    });
  });

  describe('POST /uppercaseWordsInArray', () => {
    it('makes every string in the array uppercase', done => {
      request(app)
        .post('/arrays/uppercaseWordsInArray')
        .send({ array: ["cat", "mouse", "banana"] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: [
            "CAT",
            "MOUSE",
            "BANANA"
          ] });
          done();
        });
    });
  });

  describe('POST /reverseWordsInArray', () => {
    it('reverses every string in an array', done => {
      request(app)
        .post('/arrays/reverseWordsInArray')
        .send({ array: ["cat", "Mouse", "banana"] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: [
            "tac",
            "esuoM",
            "ananab"
          ] });
          done();
        });
    });
  });

  describe('POST /onlyEven', () => {
    it('filters the array and only returns even numbers', done => {
      request(app)
        .post('/arrays/onlyEven')
        .send({ array: [1, 2, 3, 4, 5, 6, 7, 8] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: [2, 4, 6, 8] });
          done();
        });
    });
  });

  describe('POST /removeNthElement2', () => {
    it('returns an array with the nth element removed, and does not mutate the original', done => {
      request(app)
        .post('/arrays/removeNthElementNewArray')
        .send({ array: ["bike", "car", "train", "bus"] })
        .query({ index: 2 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ["bike", "car", "bus"] });
          done();
      });
    });
  });

  describe('POST /removeSpaces', () => {
    it('returns the string with the space characters removed', done => {
      request(app)
        .post('/arrays/removeSpaces')
        .send({ string: "this string has spaces" })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: "thisstringhasspaces" });
          done();
        });
    });
  });

  describe('POST /sumNumbers', () => {
    it('returns the sum of the numbers in the array', done => {
      request(app)
        .post('/arrays/sumNumbers')
        .send({ array: [1, 3, 5, 6, 2, 8] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 25 });
          done();
        });
    });
  });

  describe('POST /sortByLastLetter', () => {
    it('sorts the string by the last character', done => {
      request(app)
        .post('/arrays/sortByLastLetter')
        .send({ array: ["Lannister", "Stark", "Greyjoy", "Targaryen"]})
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ["Stark", "Targaryen", "Lannister", "Greyjoy"] });
          done();
        });
    });
  });
});
