import { Router } from 'express';
import randomTriviaService from '../services/randomTriviaService.js';

export default Router()
  .get('/', async(req, res, next) => {
    try
    {
      const questions = await randomTriviaService.getRandomQuestions();
      res.json(questions);
    }
    catch (err)
    {
      next(err);
    }
  })
  .post('/', async(req, res, next) => {
    try 
    {
      const question = await randomTriviaService.archiveQuestions(req.body);
      res.send(question);
    }
    catch(err)
    {
      next(err);
    }
  })
  
  .get('/:id', async(req, res, next) => 
  {
    try
    {
      const question = await randomTriviaService.getRandomQuestionId(req.params.id);
      res.send(question);
    }
    catch (err)
    {
      next(err);
    }
  });

