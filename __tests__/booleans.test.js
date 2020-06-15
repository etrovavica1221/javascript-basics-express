const request = require('supertest');
const app = require('../src/app');

describe('/booleans', () => {
  describe('POST /negate', () => {
    it('returns false when passed true', done => {
      request(app)
        .post('/booleans/negate')
        .send({ value: true })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    it('returns true when passed false', done => {
      request(app)
        .post('/booleans/negate')
        .send({ value: false })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });
  });

  describe('POST /truthiness', () => {
    it('returns false when passed an empty string', done => {
      request(app)
        .post('/booleans/truthiness')
        .send({ value: '' })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    it('returns false when passed 0', done => {
      request(app)
        .post('/booleans/truthiness')
        .send({ value: 0 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    it('returns false when passed null', done => {
      request(app)
        .post('/booleans/truthiness')
        .send({ value: null })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    it('returns true when passed a string', done => {
      request(app)
        .post('/booleans/truthiness')
        .send({ value: 'hello' })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    it('returns true when passed a number', done => {
      request(app)
        .post('/booleans/truthiness')
        .send({ value: 9 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });
  });

  describe('GET /is-odd/{number}', () => {
    it('returns true when passed an odd number', done => {
      request(app)
        .get('/booleans/is-odd/7')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    it('returns false when passed an even number', done => {
      request(app)
        .get('/booleans/is-odd/84')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    it('errors when the value is not numeric', done => {
      request(app)
        .get('/booleans/is-odd/bicycle')
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameter must be a number.' });
          done();
        });
    });
  });

  describe('GET /is-even/{number}', () => {
    it('returns true when passed an even number', done => {
      request(app)
        .get('/booleans/is-even/2')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    it('returns false when passed an odd number', done => {
      request(app)
        .get('/booleans/is-even/81')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    it('errors when the value is not numeric', done => {
      request(app)
        .get('/booleans/is-even/bicycle')
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameter must be a number.' });
          done();
        });
    });
  });

  describe('GET /{string}/starts-with/{character}', () => {
    it('returns true when the string starts with the given character', done => {
      request(app)
        .get('/booleans/cat/starts-with/c')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    it('returns false when the string does not start with the given character', done => {
      request(app)
        .get('/booleans/cat/starts-with/d')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    it('errors when the second argument is not a single character', done => {
      request(app)
        .get('/booleans/cat/starts-with/cat')
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameter "character" must be a single character.' });
          done();
        });
    });
  });

  describe('POST /both', () => {
    it('returns true when both of the values are true', done => {
      request(app)
        .post('/booleans/both')
        .send({ a : true, b : true })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    it('returns false when both of the values are false', done => {
      request(app)
        .post('/booleans/both')
        .send({ a : false, b : false })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    it('returns false when one of the values is false', done => {
      request(app)
        .post('/booleans/both')
        .send({ a : true, b : false })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });
  });

  describe('POST /either', () => {
    it('returns true when both of the values are true', done => {
      request(app)
        .post('/booleans/both')
        .send({ a : true, b : true })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    it('returns false when both of the values are false', done => {
      request(app)
        .post('/booleans/both')
        .send({ a : false, b : false })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    it('returns true when one of the values is false', done => {
      request(app)
        .post('/booleans/either')
        .send({ a : true, b : false })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });
  });

  describe('POST /none', () => {
    it('returns true when both of the values are false', done => {
      request(app)
        .post('/booleans/none')
        .send({ a : false, b : false })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
      });
    });

    it('returns false when both of the values are true', done => {
      request(app)
        .post('/booleans/none')
        .send({ a : true, b : true })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
      });
    });

    it('returns false when one of the values is true', done => {
      request(app)
        .post('/booleans/none')
        .send({ a : true, b : false })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
      });
    });
  });

  describe('POST /one', () => {
    it('returns false when both of the values are false', done => {
      request(app)
        .post('/booleans/one')
        .send({ a : false, b : false })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
      });
    });

    it('returns false when both of the values are true', done => {
      request(app)
        .post('/booleans/one')
        .send({ a : true, b : true })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
      });
    });

    it('returns true when only one of the values is true', done => {
      request(app)
        .post('/booleans/one')
        .send({ a : true, b : false })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
      });
    });
  });

  describe('POST /isEqual', () => {
    it('returns false when the values are not equal', done => {
      request(app)
        .post('/booleans/isEqual')
        .send({ a : false, b : true })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
      });
    });

    it('returns true when the values are equal', done => {
      request(app)
        .post('/booleans/isEqual')
        .send({ a : true, b : true })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
      });
    });
  });

  describe('POST /isGreaterThan', () => {
    it('returns false when a is less than b', done => {
      request(app)
        .post('/booleans/isGreaterThan')
        .send({ a : 5, b : 10 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
      });
    });

    it('returns false when the values are equal', done => {
      request(app)
        .post('/booleans/isGreaterThan')
        .send({ a : 5, b : 5 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
      });
    });

    it('returns true when a is greater than b', done => {
      request(app)
        .post('/booleans/isGreaterThan')
        .send({ a : 2, b : 1})
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
      });
    });
  });

  describe('POST /isLessThanOrEqualTo', () => {
    it('returns true when a is less than b', done => {
      request(app)
        .post('/booleans/isLessThanOrEqualTo')
        .send({ a : 5, b : 10 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
      });
    });

    it('returns true when the values are equal', done => {
      request(app)
        .post('/booleans/isLessThanOrEqualTo')
        .send({ a : 5, b : 5 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
      });
    });

    it('returns false when a is greater than b', done => {
      request(app)
        .post('/booleans/isLessThanOrEqualTo')
        .send({ a : 2, b : 1})
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
      });
    });
  });

  describe('GET /isSquare/{number}', () => {
    it('returns true when passed a square number', done => {
      request(app)
        .get('/booleans/isSquare/9')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    it('returns false when passed not a square number', done => {
      request(app)
        .get('/booleans/isSquare/13')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    it('errors when the value is not numeric', done => {
      request(app)
        .get('/booleans/isSquare/corgi')
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameter must be a number.' });
          done();
        });
    });
  });

  describe('GET /containsVowels/{string}', () => {
    it('returns true when the string contains a vowel', done => {
      request(app)
        .get('/booleans/containsVowels/cat')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    it('returns false when the string does not contains a vowel', done => {
      request(app)
        .get('/booleans/containsVowels/dvbxz')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });
  });
  
  describe('GET /isLowerCase /{string}', () => {
    it('returns true when the string is lower case', done => {
      request(app)
        .get('/booleans/isLowerCase/cat')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    it('returns false when the string has a capital letter', done => {
      request(app)
        .get('/booleans/isLowerCase/Moscow')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });
  });
});
