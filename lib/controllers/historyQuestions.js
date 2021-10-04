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
  })



  ///---UPDATE WITHHHHHHHHHH PATCH...AGAIN---///
  .patch('/:id', async(req, res, next) =>
  {
    try
    {
      const patchQuestion = await historyTriviaService.updateQuestion(req.body);
      res.json(patchQuestion);
    }
    catch(err)
    {
      next(err);
    }
  })


///---DELETES HISTORY QUESTION BY ID---///
  .delete('/:id', async (req, res, next) =>
  {
    try
    {
      const removeQuestion = await historyTriviaService.deleteQuestion(req.params.id);
      res.send(removeQuestion);
    }
    catch(err)
    {
      next(err);
    }
  });

