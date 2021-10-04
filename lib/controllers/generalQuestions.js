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

  })

///---POST GENERAL QUESTION---///
  .post('/', async(req, res, next) =>
  {
    try
    {
      const question = await generalTriviaService.archiveQuestions(req.body);
      res.send(question);
    }
    catch(err)
    {
      next(err);
    }
  })



  ///---GET ID---///
  .get('/:id', async (req, res, next) =>
  {
    try{
      const question = await generalTriviaService.getGeneralQuestionId(req.params.id);
      res.send(question);
    }
    catch(err)
    {
      next(err);
    }
  });
  
