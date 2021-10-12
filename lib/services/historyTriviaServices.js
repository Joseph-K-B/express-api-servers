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



  ///---GETS HISTORY QUESTION BY ID---///
  static async getHistoryQuestionId(id)
  {
    const question = await historyTrivia.selectId(id);
    return question;
  }



  ///---UPDATES HISTORY QUESTION BY ID---///
  static async updateQuestion(id, { category, difficulty, question, answer })
  {
    const questionPatch = await historyTrivia.update(id, category, difficulty, question, answer);
    return questionPatch;
  }



  ///---REMOVES QUESTION BY ID---///
  static async deleteQuestion(id)
  {
    const question = await historyTrivia.remove(id);
    return question;
  }
}
///---|---///

