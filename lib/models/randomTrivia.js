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
    this.type = row.answer_type;
    this.difficulty = row.difficulty;
    this.question = row.question;
    this.answer = row.correct_answer;
    this.incorrectAnswers = row.incorrect_answers;
  }

  static async insert({  category, type, difficulty, question, answer, incorrectAnswers })
  {
    const { rows } = await pool.query(
      `INSERT INTO randomtrivia ( category, answer_type, difficulty, question, correct_answer, incorrect_answer) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *`,
      [ 
        category,
        type,
        difficulty,
        question,
        answer, 
        incorrectAnswers
      ]
    );

    return randomQuestions(rows[0]);
  }
}
