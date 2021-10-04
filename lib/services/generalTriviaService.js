import generalTrivia from '../models/generalTrivia.js';
import { generalFetch } from '../utils/fetch.js';


export default class generalTriviaService
{

  ///---FETCH---///
  static async getGeneralQuestions()
  {
    const questions = await generalFetch();
    // console.log(questions);
    return questions;
  }



  ///---SAVES FROM FETCH---///
  static async archiveQuestions({ id, category, difficulty, question, answer })
  {
    const questions = await generalTrivia.insert({ id, category, difficulty, question, answer });
    return questions;
  }



  ///---GETS BY ID---///
  static async getGeneralQuestionId(id)
  {
    const question = await generalTrivia.selectId(id);
    return question;
  }



  ///---UPDATE---///
  static async updateQuestion(id, category, difficulty, question, answer)
  {
    const questionPatch = await generalTrivia.update(id, category, difficulty, question, answer);
    return questionPatch;
  }



  ///---REMOVE---///
  static async deleteQuestionId(id)
  {
    const question = await generalTrivia.remove(id);
    return question;
  }

  ///----|---///
}
