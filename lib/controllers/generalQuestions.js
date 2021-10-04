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
  })


///---UPDATE---///
  .patch('/:id', async(req, res, next) =>
  {
    try
    {
      const patchQuestion = await generalTriviaService.updateQuestion(req.body);
      res.json(patchQuestion);
    }
    catch(err)
    {
      next(err);
    }
  })



  ///---DELETE---///
  .delete('/:id', async (req, res, next) =>
  {
    try{
      const removeQuestion = await generalTriviaService.deleteQuestionId(req.params.id);
      res.send(removeQuestion);
    }
    catch(err)
    {
      next(err);
    }
  });
  
