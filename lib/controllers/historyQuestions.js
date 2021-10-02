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
  });
