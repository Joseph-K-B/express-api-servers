import { Router } from 'express';
import historyTriviaService from '../services/historyTriviaServices.js';

export default Router()



///---GETS ALL HISTORY QUESTIONS---///
  .get('/', async(req, res, next) =>
  {
    try
    {
      const questions = await historyTriviaService.getHistoryQuestions();
      res.json(questions);
    }
    catch(err)
    {
      next(err);
    }
  })



///---POST NEW HISTORY QUESTION---///
  .post('/', async(req, res, next) =>
  {
    try
    {
      const question = await historyTriviaService.archiveQuestions(req.body);
      res.send(question);
    }
    catch(err)
    {
      next(err);
    }
  })


  
  ///---GET HISTORY QUESTION BY ID---///
  .get('/:id', async (req, res, next) =>
  {
    try
    {
      const question = await historyTriviaService.getHistoryQuestionId(req.params.id);
      res.send(question);
    }
    catch(err)
    {
      next(err);
    }
  });
