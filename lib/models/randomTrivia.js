import pool from '../utils/pool.js';

export default class randomQuestions
{
  constructor(row) 
  {
    this.id = row.id;
    this.category = row.category;
    this.difficulty = row.difficulty;
    this.question = row.question;
    this.answer = row.answer;
  }

  static async insert({  category, difficulty, question, answer })
  {
    const { rows } = await pool.query(
      'INSERT INTO randomtrivia (category, difficulty, question, answer) VALUES ($1, $2, $3, $4) RETURNING *',
      [category, difficulty, question, answer]
    );

    return randomQuestions(rows[0]);
  }
}
