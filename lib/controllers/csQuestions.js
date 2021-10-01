import { Router } from 'express';
import csTriviaService from '../services/csTriviaService.js';

export default Router()



///---GETS ALL CS QUESTIONS---///
  .get('/', async (req, res, next) =>
  {
    try
    {
      const questions = await csTriviaService.getCSQuestions();
      res.json(questions);
    }
    catch(err)
    {
      next(err);
    }
  })



///---POST NEW CS QUESTION---///
  .post('/', async(req, res, next) =>
  {
    try
    {
      const question = await csTriviaService.archiveQustions(req.body);
      res.send(question);
    }
    catch(err)
    {
      next(err);
    }
  })


///---GET CS BY ID---///
  .get('/:id', async(req, res, next) =>
  {
    try
    {
      const question = await csTriviaService.getCSQuestionId(req.params.id);
      res.send(question);
    }
    catch(err)
    {
      next(err);
    }
            
  });

