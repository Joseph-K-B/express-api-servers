/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import randomQuestions from '../lib/models/randomTrivia.js';


describe.skip('trivia application', () => {
  beforeEach(() => 
  {
    return setup(pool);
  });



  ///---RANDOM---///
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
    return await request(app)
      .post('/api/random')
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

    return request(app)
      .get('/api/random/1')
      .then(res =>
      {
        expect(res.body).toEqual(
          {
            id: '1',
            category: expect.any(String),
            difficulty: expect.any(String),
            question: expect.any(String),
            answer: expect.any(String)
          });
      });
  });



  it('updates the random question by the id', async () =>
  {
    return request(app)
      .patch('/api/random/1')
      .send(
        { 
          category: 'Geography',
          difficulty: 'easy',
          question: 'What city is built on two continents?',
          answer: 'Not Istanbul' 
        })
      .then((res) =>
      {

        // console.log(res.body);
        expect(res.body).toEqual(
          {
            id: '1',
            category: 'Geography',
            difficulty: 'easy',
            question: 'What city is built on two continents?',
            answer: 'Not Istanbul'
          });
      });
  });



  it('deletes random questions from DB by ID', async () =>
  {
    const question = await randomQuestions.insert(
      {
        category: 'Geography',
        difficulty: 'easy',
        question: 'What city is built on two continents?',
        answer: 'Istanbul'
      }
    );
    const res = await request(app)
      .delete('/api/random/1');
    expect (res.body).toEqual({});
  });


  
  afterAll(() => 
  {
    pool.end();
  });
});
