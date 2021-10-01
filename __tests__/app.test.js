/* eslint-disable no-console */
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import randomQuestions from '../lib/models/randomTrivia.js';
// import randomTriviaService from '../lib/services/randomTriviaService.js';
// import randomQuestions from '../lib/models/randomTrivia.js';

describe('trivia application', () => {
  beforeEach(() => 
  {
    return setup(pool);
  });



  //RANDOM
  it('Get\'s random trivia questions from API', async() =>
  {
    return await request(app)
      .get('/api/trivia/random')
      .then((res) => 
      {
        expect(res.body).toEqual(expect.any(Array));
      });
  });
    
  it('it posts random questions to /random', async() => 
  {
    // const questions = await randomTriviaService.getRandomQuestions();
    return await request(app)
      .post('/api/trivia/random')
      .send(
        {
          category: 'Geography',
          difficulty: 'easy',
          question: 'What city is built on two continents?',
          answer: 'Istanbul'
        }
      )
      .then(res => 
      {
        expect(res.body).toEqual(expect.any(Object));
      });
  });

  it('it gets all random questions from database', async() =>
  {

    return await request(app)
      .get('/api/trivia/random')
      .then(res =>
      {
        // console.log('Test File getAll ', res.body);
        expect(res.body).toEqual(expect.any(Array));
      });      
  });

  it('gets random question by id from db', async() =>
  {
    // eslint-disable-next-line no-unused-vars
    const question = await randomQuestions.insert(
      {
        category: 'Astronomy',
        difficulty: 'easy',
        question: 'How many moons does Earth have?',
        answer: '1'
      }
    );
    // console.log(question);
    return request(app)
      .get('/api/trivia/random/1')
      .then(res =>
      {
        // console.log('Test File get:id', res.body);
        expect(res.body).toEqual({
          id: '1',
          category: expect.any(String),
          difficulty: expect.any(String),
          question: expect.any(String),
          answer: expect.any(String)
        });
      });
  });

  it.skip('updates the random question by the id', async () =>
  {
    return request(app)
      .put('/api/trivia/random/1')
      .send({ answer: 'Not Istanbul' })
      .then((res) =>
      {
        expect(res.body).toEqual({
          category: 'Geography',
          difficulty: 'easy',
          question: 'What city is built on two continents?',
          answer: 'Not Istanbul'
        });
      });
  });

  it('deletes random questions from DB by ID', async () =>
  {
    const res = await request(app)
      .delete('/api/trivia/random/1');
    expect (res.body).toEqual({});
  });

  //COMPUTER SCIENCE
  it('Get\'s computer science trivia questions from API', async() =>
  {
    return await request(app)
      .get('/api/trivia/cs')
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
