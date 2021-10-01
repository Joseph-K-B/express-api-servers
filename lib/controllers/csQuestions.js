import { Router } from 'express';
import csTriviaService from '../services/csTriviaService.js';

export default Router()

//GETS ALL CS QUESTIONS
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
  });
