import randomQuestions from '../models/randomTrivia.js';
import { randomFetch } from '../utils/fetch.js';

export default class randomTriviaService
{
  static async getRandomQuestions()
  {
    const questions = await randomFetch();
    return questions;
  }
  
  static async archiveQuestions({ category, difficulty, question, answer })
  {
    const questions = await randomQuestions.insert({ category, difficulty, question, answer });
    return questions;
  }
}
