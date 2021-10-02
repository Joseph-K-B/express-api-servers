import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import historyTrivia from '../lib/models/historyTrivia.js';


describe('trivia application', () => {
  beforeEach(() => 
  {
    return setup(pool);
  });


  ///---HISTORY---///
  it('Get\'s history trivia questions from API', async() =>
  {
    return await request(app)
      .get('/api/history')
      .then((res) =>
      {
        console.log('GET ALL FROM /HISTORY', res.body);
        expect(res.body).toEqual(expect.any(Array));
      });
  });

  
  afterAll(() => 
  {
    pool.end();
  });
});
