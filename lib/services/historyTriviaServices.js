import historyTrivia from '../models/historyTrivia.js';
import { historyFetch } from '../utils/fetch.js';


export default class historyTriviaService
{

  ///---FETCHES HISTORY QUESTIONS FROM API---///
  static async getHistoryQuestions()
  {
    const questions = await historyFetch();
    return questions;
  }



  ///---SAVES HISTORY QUESTIONS FROM FETCH---///
  static async archiveQuestions({ id, category, difficulty, question, answer })
  {
    const questions = await historyTrivia.insert({ id, category, difficulty, question, answer });
    return questions;
  }



  ///---|---///
  ///---|---///
}
