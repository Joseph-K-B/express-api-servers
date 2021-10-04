import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import generalQuestions from '../lib/models/generalTrivia.js';



describe('trivia application', () => {
  beforeEach(() => 
  {
    return setup(pool);
  });


  ///---GENERAL---///
  it('Get\'s general questions from trivia API', async() =>
  {
    return await request(app)
      .get('/api/general')
      .then((res) =>
      {
        console.log(res.body);
        expect(res.body).toEqual(expect.any(Array));
      });
  });


  afterAll(() => 
  {
    pool.end();
  });
});
