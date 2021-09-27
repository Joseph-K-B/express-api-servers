import { Router } from 'express';
import randomTriviaService from '../services/randomTriviaService.js';

export default Router()
  .get('/', async (req, res, next) => 
  {
    try 
    {
      const savedQuestions = await randomTriviaService.saveRandomQuestions();
      res.json(savedQuestions);
      // console.log(savedQuestions);
    } 
    catch (err) 
    {
      next(err);
    }
  })

  .post('/', async(req, res, next) => {
    try
    {
      const questions = await randomTriviaService.saveRandomQuestions(req.body);
      res.json(questions);
    }
    catch (err)
    {
      next(err);
    }
  });
