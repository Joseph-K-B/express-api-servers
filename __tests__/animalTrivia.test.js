import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
// import animalQuestions from '../lib/models/animalTrivia.js';
import app from '../lib/app.js';
import animalQuestions from '../lib/models/animalTrivia.js';





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



  it('gets animal question by id from db', async () =>
  {
    const question1 = await animalQuestions.insert(
      {
        category: 'Animals',
        difficulty: 'easy',
        question: 'What is the collective noun for rats?',
        answer: 'Mischief'
      });
    const question2 = await animalQuestions.insert(
      {
        category: 'Animals',
        difficulty: 'easy',
        question: 'What is the collective noun for crows?',
        answer: 'Murder'
      });
    const question3 = await animalQuestions.insert(
      {
        category: 'Animals',
        difficulty: 'easy',
        question: 'What is the largest species of bear?',
        answer: 'Polar Bear'
      }
    );
    return request(app)
      .get('/api/animal/3')
      .then(res =>
      {
        expect(res.body).toEqual(
          {
            id: '3',
            category: 'Animals',
            difficulty: expect.any(String),
            question: expect.any(String),
            answer: expect.any(String)
          });
      });
  });

  afterAll(() => 
  {
    pool.end();
  });
});
