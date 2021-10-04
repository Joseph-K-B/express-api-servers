import { Router } from 'express';
import randomTriviaService from '../services/randomTriviaService.js';

export default Router()



///---GETS ALL RANDOM QUESTIONS---///
  .get('/', async(req, res, next) => 
  {
    try
    {
      const questions = await randomTriviaService.getRandomQuestions();
      res.json(questions);
    }
    catch (err)
    {
      next(err);
    }
  })



  ///---POST NEW RANDOM QUESTION---///
  .post('/', async(req, res, next) => 
  {
    try 
    {
      const question = await randomTriviaService.archiveQuestions(req.body);
      res.send(question);
    }
    catch(err)
    {
      next(err);
    }
  })
  


  ///---GET RANDOM BY ID---///
  .get('/:id', async(req, res, next) => 
  {
    try
    {
      const question = await randomTriviaService.getRandomQuestionId(req.params.id);
      res.send(question);
    }
    catch (err)
    {
      next(err);
    }
  })


  ///---UPDATE WITH PUT---///
  .patch('/:id', async(req, res, next) => 
  {
    try
    {
      const patchQuestion = await randomTriviaService.updateQuestion(req.body);
      res.json (patchQuestion);
    }
    catch(err)
    {
      next(err);
    }
  })

  ///---REMOVE BY ID---///
  .delete('/:id', async(req, res, next) =>
  {
    try
    {
      const removeQuestion = await randomTriviaService.deleteQuestion(req.params.id);
      res.send(removeQuestion);
    }
    catch(err)
    {
      next(err);
    }
  });
 
