// import csQuestions from '../models/csTrivia.js';
import { csFetch } from '../utils/fetch.js';

export default class csTriviaService
{

  //FETCHES COMPUTER SCIENCE QUESTIONS FROM API
  static async getCSQuestions()
  {
    const questions = await csFetch();
    // console.log(questions);
    return questions;
  }


  //SAVES CS QUESTIONS FROM FETCH  
}
