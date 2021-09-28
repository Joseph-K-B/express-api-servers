import pool from '../utils/pool';

export default class randomQuestions
{
//   id;
//   category;
//   type;
//   difficulty;
//   question;
//   correct_answer;
//   incorrect_answers;

  constructor(row) 
  {
    this.id = row.id;
    this.category = row.category;
    // this.type = row.answer_type;
    this.difficulty = row.difficulty;
    this.question = row.question;
    this.answer = row.answer;
    // this.incorrectAnswers = row.incorrect_answers;
  }

  static async insert({  category, difficulty, question, answer })
  {
    const { rows } = await pool.query(
      `INSERT INTO randomtrivia ( category, difficulty, question, answer) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *`,
      [ 
        category,
        // type,
        difficulty,
        question,
        answer, 
        // incorrectAnswers
      ]
    );
    // console.log('broken here??', randomQuestions);

    return randomQuestions(rows[0]);
  }
}
