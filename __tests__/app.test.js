import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
// import randomTriviaService from '../lib/services/randomTriviaService.js';
import randomQuestions from '../lib/models/randomTrivia.js';

describe('trivia application', () => {
  // beforeEach(() => 
  // {
  //   return setup(pool);
  // });

  it('Get\'s random trivia questions from API', async() =>
  {
    return await request(app)
      .get('/api/random')
      .then((res) => 
      {
        expect(res.body).toEqual(expect.any(Array));
      });
  });
    
  it('it posts random questions to /random', async() => 
  {
    // const questions = await randomTriviaService.getRandomQuestions();
    return await request(app)
      .post('/api/random')
      .send(
        {
          id: '1',
          category: 'Geography',
          difficulty: 'easy',
          question: 'What city is built on two continents?',
          answer: 'Istanbul'
        }
      )
      .then(res => 
      {
        console.log(res.body);
        expect(res.body).toEqual(expect.any(Object));
      });
  });

  it('it gets all questions from database', async() =>
  {

    return await request(app)
      .get('/api/random')
      .then(res =>
      {
        expect(res.body).toEqual(expect.any(Array));
      });      
  });



  afterAll(() => 
  {
    pool.end();
  });
});
