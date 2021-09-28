import randomQuestions from '../models/randomTrivia';
import { randomFetch } from '../utils/fetch';

export default class randomTriviaService
{
  static async saveRandomQuestions()
  {
    const newQuestions = await randomFetch();
    const savedQuestions = await randomQuestions.insert(newQuestions);
    console.log('maybe broken here?', savedQuestions);
    return savedQuestions;
  } 
}
