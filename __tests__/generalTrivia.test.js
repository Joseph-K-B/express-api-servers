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
        expect(res.body).toEqual(expect.any(Array));
      });
  });



  it('posts new general question', async () =>
  {
    return await request(app)
      .post('/api/general')
      .send(
        {
          category: 'General Knowledge',
          difficulty: 'easy',
          question: 'Which Gandalf is better?',
          answer: 'The Grey'
        }
      )
      .then(res =>
      {
        console.log('TESTING POST', res.body);
        expect(res.body).toEqual(expect.any(Object));
      });
  });


  afterAll(() => 
  {
    pool.end();
  });
});
