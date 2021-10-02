import csQuestions from '../models/csTrivia.js';
import { csFetch } from '../utils/fetch.js';

export default class csTriviaService
{

  ///---FETCHES COMPUTER SCIENCE QUESTIONS FROM API---///
  static async getCSQuestions()
  {
    const questions = await csFetch();
    // console.log('AT THE CS FETCH FUNCTION', questions);
    return questions;
  }


  ///---SAVES CS QUESTIONS FROM FETCH---///
  static async archiveQustions({ id, category, difficulty, question, answer })
  {
    const questions = await csQuestions.insert({ id, category, difficulty, question, answer });
    return questions;
  }
  
  

  ///---GETS QUESTION BY ID---///
  static async getCSQuestionId(id)
  {
    const question = await csQuestions.selectId(id);
    return question;
  }



  ///---UPDATES QUESTION BY ID---///
  static async updateQuestion(id, category, difficulty, question, answer)
  {
    const questionPatch = await csQuestions.update(id, category, difficulty, question, answer);
    return questionPatch;
  }


  ///---REMOVES QUESTION BY ID---///
  static async deleteQuestion(id)
  {
    const question = await csQuestions.remove(id);
    return question;
  }


  ///---|---///
}
