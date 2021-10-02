import randomQuestions from '../models/randomTrivia.js';
import { randomFetch } from '../utils/fetch.js';

export default class randomTriviaService
{

  ///---FETCHES RANDOM QUESTIONS FROM API---///
  static async getRandomQuestions()
  {
    const questions = await randomFetch();
    return questions;
  }
  

  ///---SAVES RANDOM QUESTIONS FROM FETCH---///
  static async archiveQuestions({ id, category, difficulty, question, answer })
  {
    const questions = await randomQuestions.insert({ id, category, difficulty, question, answer });
    return questions;
  }


  ///---GETS QUESTION BY ID---///
  static async getRandomQuestionId(id)
  {
    const question = await randomQuestions.selectId(id);
    return question;  
  }


  ///---UPDATES QUESTION BY ID---///
  static async updateQuestion(id, category, difficulty, question, answer)
  {
    const questionPatch = await randomQuestions.update(id, category, difficulty, question, answer);
    return questionPatch;
  }


  ///---REMOVES QUESTION BY ID---///
  static async deleteQuestion(id)
  {
    const question = await randomQuestions.remove(id);
    return question;
  }
}
///---|---///
