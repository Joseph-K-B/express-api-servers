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
        expect(res.body).toEqual(expect.any(Array));
      });
  });

  afterAll(() => 
  {
    pool.end();
  });
});
