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
      res.json(question);
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
  })



///---UPDATE WITH PATCH---///
  .patch('/:id', async(req, res, next) => {
    try {
      const patchQuestion = await csTriviaService.updateQuestion(req.params.id, req.body);
      res.json(patchQuestion);
    }
    catch(err)
    {
      next(err);
    }
  })



  ///---REMOVE BY ID---///
  .delete('/:id', async (req, res, next) =>
  {
    try
    {
      const removeQuestion = await csTriviaService.deleteQuestion(req.params.id);
      res.send(removeQuestion);
    }
    catch(err)
    {
      next(err);
    }
  });

