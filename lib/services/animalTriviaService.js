import animalQuestions from '../models/animalTrivia.js';
import { animalFetch } from '../utils/fetch.js';

export default class animalTriviaService
{
  ///---FETCHES ANIMAL QUESTIONS FROM API---///
  static async getAnimalQuestions()
  {
    const questions = await animalFetch();
    console.log('FETCH ANIMAL QUESTIONS AT SERVICE LAYER', questions);
  }



  ///---SAVES ANIMAL QUESTIONS FROM FETCH---///
  static async archiveQustions({ id, category, difficulty, question, answer })
  {
    const questions = await animalQuestions.insert({ id, category, difficulty, question, answer });
    return questions;
  }
}
