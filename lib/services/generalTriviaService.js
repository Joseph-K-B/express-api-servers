import generalTrivia from '../models/generalTrivia.js';
import { generalFetch } from '../utils/fetch.js';


export default class generalTriviaService
{

  ///---FETCH---///
  static async getGeneralQuestions()
  {
    const questions = await generalFetch();
    console.log(questions);
    return questions;
  }
}
