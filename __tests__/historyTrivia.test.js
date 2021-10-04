/* eslint-disable no-unused-vars */
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import historyTrivia from '../lib/models/historyTrivia.js';


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



  it('gets history question by id from db', async () =>
  {
    const question1 = await historyTrivia.insert(
      {
        category: 'History',
        difficulty: 'easy',
        question: 'What year did Columbus sail the ocean blue?',
        answer: '1492'
      });
    const question2 = await historyTrivia.insert(
      {
        category: 'History',
        difficulty: 'easy',
        question: 'Who was the first European to sail to the Americas?',
        answer: 'Lief Erikson'
      });
    const question3 = await historyTrivia.insert(
      {
        category: 'History',
        difficulty: null,
        question: 'What was the first country the nazis invaded?',
        answer: 'Poland'
      }
    );

    return request(app)
      .get('/api/history/3')
      .then(res =>
      {
        expect(res.body).toEqual(
          {
            id: '3',
            category: 'History',
            difficulty: null,
            question: expect.any(String),
            answer: expect.any(String)
          });
      });
  });



  it('updates history question by it\'s id', async () =>
  {
    return request(app)
      .patch('api/history/1')
      .send(
        {
          category:'History',
          difficulty: 'hard',
          question: 'What year was the Guy Fawkes Gunpowder Plot?',
          answer: '1605'
        })
      .then((res) =>
      {
        console.log(res.body);
        expect(res.body).toEqual(
          {
            id: '1',
            category:'History',
            difficulty: 'hard',
            question: 'What year was the Guy Fawkes Gunpowder Plot?',
            answer: '1605'
          }
        );
      });
  });



  it('deletes history question from DB by ID', async () =>
  {
    const question1 = await historyTrivia.insert(
      {
        category: 'History',
        difficulty: 'easy',
        question: 'What year is it? Fuck',
        answer: '2000+'
      });
    const res = await request(app)
      .delete('/api/history/1');
    expect(res.body).toEqual({});
  });




  afterAll(() => 
  {
    pool.end();
  });
});
