import { Router } from 'express';
import animalTriviaService from '../services/animalTriviaService.js';

export default Router()


///---GETS ALL ANIMAL QUESTIONS---///
  .get('/', async(req, res, next) =>
  {
    try
    {
      const questions = await animalTriviaService.getAnimalQuestions();
      res.json(questions);
    }
    catch(err)
    {
      next(err);
    }
  })



  ///---POST NEW ANIMAL QUESTION---///
  .post('/', async(req, res, next) =>
  {
    try
    {
      const question = await animalTriviaService.archiveQustions(req.body);
      res.send(question);
    }
    catch(err)
    {
      next(err);
    }

  })

///---GET ANIMAL BY ID---///
  .get('/:id',  async (req, res, next) =>
  {
    try
    {
      const question = await animalTriviaService.getAnimalQuestionId(req.params.id);
      res.send(question);
    }
    catch(err)
    {
      next(err);
    }
  })


  ///---UPDATE WITH PATCH---///
  .patch('/:id', async (req, res, next) =>
  {
    try
    {
      const patchQuestion = await animalTriviaService.patchQuestion(req.params.id);
      res.json (patchQuestion);
    }
    catch(err)
    {
      next(err);
    }
  })



  ///---DELETE BY ID---///
  .delete('/:id', async (req, res, next) =>
  {
    try
    {
      const removeQuestion = await animalTriviaService.deleteQuestion(req.params.id);
      res.send(removeQuestion);
    }
    catch(err)
    {
      next(err);
    }
  });

