/* eslint-disable no-unused-vars */
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import generalQuestions from '../lib/models/generalTrivia.js';
import generalTrivia from '../lib/models/generalTrivia.js';
import { generalFetch } from '../lib/utils/fetch.js';



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



  it('gets by id', async () =>
  {
    const question1 = await generalTrivia.insert(
      {
        category: 'General Knowledge',
        difficulty: 'easy',
        question: 'Color of the sky?',
        answer: 'Green'
      });
    const question2 = await generalTrivia.insert(
      {
        category: 'General Knowledge',
        difficulty: 'easy',
        question: 'Leader of the free world?',
        answer: 'JFK'
      });
    const question3 = await generalTrivia.insert({
      category: 'General Knowledge',
      difficulty: 'easy',
      question: 'Opposite of up?',
      answer: 'down'
    });

    return request(app)
      .get('/api/general/2')
      .then(res =>
      {
        expect(res.body).toEqual({
          id: '2',
          category: 'General Knowledge',
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
