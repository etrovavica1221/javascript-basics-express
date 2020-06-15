const request = require('supertest');
const app = require('../src/app');

describe('/numbers', () => {
  describe('GET /add/{number}/and/{number}', () => {
    it('adds 2 and 1', done => {
      request(app)
        .get('/numbers/add/2/and/1')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 3 });
          done();
        });
    });

    it('adds 12 and 0', done => {
      request(app)
        .get('/numbers/add/12/and/0')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 12 });
          done();
        });
    });

    it('adds 10 and -5', done => {
      request(app)
        .get('/numbers/add/10/and/-5')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 5 });
          done();
        });
    });

    it('errors if the parameters are not numbers', done => {
      request(app)
        .get('/numbers/add/fish/and/chips')
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters must be valid numbers.' });
          done();
        });
    });
  });

  describe('GET /subtract/{number}/from/{number}', () => {
    it('subtracts 2 from 1', done => {
      request(app)
        .get('/numbers/subtract/2/from/1')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: -1 });
          done();
        });
    });

    it('subtracts -2 from 1', done => {
      request(app)
        .get('/numbers/subtract/-2/from/1')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 3 });
          done();
        });
    });

    it('errors if the parameters are not numbers', done => {
      request(app)
        .get('/numbers/subtract/fish/from/chips')
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters must be valid numbers.' });
          done();
        });
    });
  });

  describe('POST /multiply', () => {
    it('multiplies two numbers', done => {
      request(app)
        .post('/numbers/multiply')
        .send({ a: 10, b: 3 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 30 });
          done();
        });
    });

    it('multiplies stringified numbers', done => {
      request(app)
        .post('/numbers/multiply')
        .send({ a: '-4', b: '-9' })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 36 });
          done();
        });
    });

    it('errors if a parameter is missing', done => {
      request(app)
        .post('/numbers/multiply')
        .send({ a: 'fish' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters "a" and "b" are required.' });
          done();
        });
    });

    it('errors if the parameters are not numbers', done => {
      request(app)
        .post('/numbers/multiply')
        .send({ a: 'fish', b: 'chips' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters "a" and "b" must be valid numbers.' });
          done();
        });
    });
  });

  describe('POST /divide', () => {
    it('divides two numbers', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: 162, b: 3 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 54 });
          done();
        });
    });

    it('divides stringified numbers', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: '-4', b: '8' })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: -0.5 });
          done();
        });
    });

    it('divides 0 by a number', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: 0, b: 10 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 0 });
          done();
        });
    });

    it('errors if dividing by 0', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: 10, b: 0 })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Unable to divide by 0.' });
          done();
        });
    });

    it('errors if a parameter is missing', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: 'fish' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters "a" and "b" are required.' });
          done();
        });
    });

    it('errors if the parameters are not numbers', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: 'fish', b: 'chips' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters "a" and "b" must be valid numbers.' });
          done();
        });
    });
  });

  describe('POST /remainder', () => {
    it('gives the remainder of dividing 18 by 5', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: 18, b: 5 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 3 });
          done();
        });
    });

    it('gives the remainder of dividing -4 by 8', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: '-4', b: '8' })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: -4 });
          done();
        });
    });

    it('gives the remainder of dividing 0 by a number', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: 0, b: 10 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 0 });
          done();
        });
    });

    it('errors if dividing by 0', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: 10, b: 0 })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Unable to divide by 0.' });
          done();
        });
    });

    it('errors if a parameter is missing', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: 'fish' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters "a" and "b" are required.' });
          done();
        });
    });

    it('errors if the parameters are not numbers', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: 'fish', b: 'chips' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters must be valid numbers.' });
          done();
        });
    });
  });

  describe('POST /power', () => {
    it('powers a number by another number', done => {
      request(app)
        .post('/numbers/power')
        .send({ a: 3, b: 2 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 9 });
          done();
        });
    });
  });

  describe('POST /round', () => {
    it('returns the value of a number rounded to the nearest integer', done => {
      request(app)
        .post('/numbers/round')
        .send({ a: 3.1763 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 3 });
          done();
        });
    });
  });

  describe('POST /roundUp', () => {
    it('returns the value of a number rounded to the next largest intenger', done => {
      request(app)
        .post('/numbers/roundUp')
        .send({ a: 7.89 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 8 });
          done();
        });
    });
  });

  describe('POST /roundDown', () => {
    it('returns the value of a number rounded to the largest integer less than or equal to a given number', done => {
      request(app)
        .post('/numbers/roundDown')
        .send({ a: 7.89 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 7 });
          done();
        });
    });
  });

  describe('POST /absolute', () => {
    it('returns the absolute value of a number', done => {
      request(app)
        .post('/numbers/absolute')
        .send({ a: -7.89 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 7.89 });
          done();
        });
    });
  });

  describe('POST /quotient', () => {
    it('returns quotient', done => {
      request(app)
        .post('/numbers/quotient')
        .send({ a: 7, b: 4 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 1 });
          done();
        });
    });
  });
});
