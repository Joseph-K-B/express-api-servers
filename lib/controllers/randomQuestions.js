import { Router } from 'express';
import randomTriviaService from '../services/randomTriviaService.js';

export default Router()
  .get('/', async (req, res, next) => 
  {
    try 
    {
      const questions = await randomTriviaService.saveRandomQuestions();
      res.json(questions);
      console.log('still broken here?? has to be the insert', questions);
    } 
    catch (err) 
    {
      next(err);
    }
  });

// .post('/', async(req, res, next) => {
//   try
//   {
//     const questions = await randomTriviaService.saveRandomQuestions(req.body);
//     res.json(questions);
//   }
//   catch (err)
//   {
//     next(err);
//   }
// });
