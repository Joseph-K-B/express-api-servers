/* eslint-disable no-unused-vars */
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import csQuestions from '../lib/models/csTrivia.js';
import app from '../lib/app.js';





describe.skip('trivia application', () => {
  beforeEach(() => 
  {
    return setup(pool);
  });




  ///---COMPUTER SCIENCE---///
  it('Get\'s computer science trivia questions from API', async() =>
  {
    return await request(app)
      .get('/api/cs')
      .then((res) => 
      {
        expect(res.body).toEqual(expect.any(Array));
      });
  });



  it('it posts cs questions to /cs', async() => 
  {
    return await request(app)
      .post('/api/cs')
      .send(
        {
          category: 'Science: Computers',
          difficulty: 'easy',
          question: 'Who invented JavaScript?',
          answer: 'Marty Nelson'
        }
      )
      .then(res => 
      {
        expect(res.body).toEqual(expect.any(Object));
      });
  });



  it('gets CS question by id from db', async() =>
  {
  // eslint-disable-next-line no-unused-vars
    const question1 = await csQuestions.insert(
      {
        category: 'Science: Computers',
        difficulty: 'easy',
        question: 'Who invented the computer?',
        answer: 'Walt Disney'
      });
    const question2 = await csQuestions.insert(
      {
        category: 'Science: Computers',
        difficulty: 'easy',
        question: 'Where does data float around?',
        answer: 'The cloud'
      });
    const question3 = await csQuestions.insert({
      category: 'Science: Computers',
      difficulty: 'easy',
      question: 'How does JavaScript work?',
      answer: 'Magic'
    });
    

    return request(app)
      .get('/api/cs/3')
      .then(res =>
      {
        expect(res.body).toEqual({
          id: '3',
          category: 'Science: Computers',
          difficulty: expect.any(String),
          question: expect.any(String),
          answer: expect.any(String)
        });
      });
  });


  it('updates csQuestion by id', async () =>
  {
    return request(app)
      .patch('/api/cs/1')
      .send(
        {
          category: 'Science: Computers',
          difficulty: 'extreme',
          question: 'Who invented JavaScript?',
          answer: 'Marty Nelson'
        })
      .then((res) =>
      {
        expect(res.body).toEqual(
          {
            id: '1',
            category: 'Science: Computers',
            difficulty: 'extreme',
            question: 'Who invented JavaScript?',
            answer: 'Marty Nelson'
          }
        );
      });
  });

  it('deletes computer science question from database', async () =>
  {
    const question = csQuestions.insert(
      {
        category: 'Science: Computers',
        difficulty: 'easy',
        question: 'How does JavaScript work?',
        answer: 'Magic'
      }
    );
    const res = await request(app)
      .delete('/api/cs/1');
    expect (res.body).toEqual({});
  });

  afterAll(() => 
  {
    pool.end();
  });
});
