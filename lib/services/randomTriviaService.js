import randomQuestions from '../models/randomTrivia.js';
import { randomFetch } from '../utils/fetch.js';

export default class randomTriviaService
{
  static async getRandomQuestions()
  {
    const questions = await randomFetch();
    return questions;
  }
  
  static async archiveQuestions({ id, category, difficulty, question, answer })
  {
    const questions = await randomQuestions.insert({ id, category, difficulty, question, answer });
    return questions;
  }

  static async getRandomQuestionId(id)
  {
    const question = await randomQuestions.selectId(id);
    console.log(question);
    return question;  
  }
}
