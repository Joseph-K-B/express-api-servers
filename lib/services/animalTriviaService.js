// import animalQuestions from '../controllers/animalQuestions.js';
import animalTrivia from '../models/animalTrivia.js';
import { animalFetch } from '../utils/fetch.js';

export default class animalTriviaService
{
  ///---FETCHES ANIMAL QUESTIONS FROM API---///
  static async getAnimalQuestions()
  {
    const questions = await animalFetch();
    // console.log('FETCH ANIMAL QUESTIONS AT SERVICE LAYER', questions);
    return questions;
  }



  ///---SAVES ANIMAL QUESTIONS FROM FETCH---///
  static async archiveQuestions({ id, category, difficulty, question, answer })
  {
    const questions = await animalTrivia.insert({ id, category, difficulty, question, answer });
    return questions;
  }



  ///---GETS QUESTION BY ID---///
  static async getAnimalQuestionId(id)
  {
    const question = await animalTrivia.selectId(id);
    return question;
  }


  ///---REMOVES QUESTION BY ID---///
  static async deleteQuestion(id)
  {
    const question = await animalTrivia.remove(id);
    return question;
  }


  ///---UPDATE BY ID---///
  static async updateQuestion(id, {category, difficulty, question, answer}) {
    const newQuestion = await animalTrivia.update(id, category, difficulty, question, answer);
    return newQuestion;
  }
}
