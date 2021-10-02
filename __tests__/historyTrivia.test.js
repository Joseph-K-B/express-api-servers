import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
// import historyTrivia from '../lib/models/historyTrivia.js';


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
        expect(res.body).toEqual(expect.any(Array));
      });
  });



  it('posts history questions to /history', async () =>
  {
    return await request(app)
      .post('/api/history')
      .send(
        {
          category: 'History',
          difficulty: 'easy',
          question: 'What year was Jeff Bezos the first person to lick the moon?',
          answer: 'yesteryear'
        }
      )
      .then(res =>
      {
        expect(res.body).toEqual(expect.any(Object));
      });
  });


  afterAll(() => 
  {
    pool.end();
  });
});
