import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import animalQuestions from '../lib/models/animalTrivia.js';
import app from '../lib/app.js';





describe('trivia application', () => {
  beforeEach(() => 
  {
    return setup(pool);
  });

  ///---ANIMAL---///
  it('Get\'s animal trivia questions from API', async() =>
  {
    return await request(app)
      .get('/api/animal')
      .then((res) => 
      {
        console.log('GET ALL ANIMAL QUESTIONS ON TEST FILE', res.body);
        expect(res.body).toEqual(expect.any(Array));
      });
  });



  it('it posts cs questions to /animals', async () =>
  {
    return await request(app)
      .post('/api/animal')
      .send(
        {
          category: 'Animals',
          difficulty: 'easy',
          question: 'What is the collective noun for rats?',
          answer: 'Mischief'
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
