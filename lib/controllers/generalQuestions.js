import { Router } from 'express';
import generalTriviaService from '../services/generalTriviaService.js';


export default Router()



///---GET ALL---///
  .get('/', async (req, res, next) =>
  {
    try
    {
      const questions = await generalTriviaService.getGeneralQuestions();
      res.json(questions);
    }
    catch(err)
    {
      next(err);
    }
  });
