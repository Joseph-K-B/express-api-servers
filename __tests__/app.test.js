import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('trivia application', () => {
  beforeEach(() => 
  {
    return setup(pool);
  });

  it('Get\'s a random trivia question from API', () =>
  {
    return request(app)
      .get('/api/random')
      .then((res) => 
      {
        expect(res.body).toEqual(
          [{
            category: expect.any(String),
            type: expect.any(String),
            difficulty: expect.any(String),
            question: expect.any(String),
            correct_answer: expect.any(String),
            incorrect_answers: expect.any(String)
          }]
        );
      });
  });

  afterAll(() => 
  {
    pool.end();
  });
});
