// import csTriviaService from '../services/csTriviaService.js';
import pool from '../utils/pool.js';

export default class csQuestions
{

  constructor(row) 
  {
    this.id = row.id;
    this.category = row.category;
    this.difficulty = row.difficulty;
    this.question = row.question;
    this.answer = row.answer;
  }


  ///---ADDS QUESTIONS TO SQL TABLE---///
  static async insert({  category, difficulty, question, answer })
  {
    const { rows } = await pool.query(
      `INSERT INTO cs_trivia (category, difficulty, question, answer) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *`,
      [category, difficulty, question, answer]
    );

    return new csQuestions(rows[0]);
  }


  ///---GETS ALL CS QUESTIONS FROM TABLE---///
  static async selectAll()
  {
    const { rows } = await pool.query(
      'SELECT * FROM cs_trivia'
    );
    return rows.map((row) => new csQuestions(row));
  }



  ///---GETS CS QUESTION BY ID---///
  static async selectId(id)
  {
    const { rows } = await pool.query(`
    SELECT * FROM cs_trivia
    WHERE id = $1`, [id]
    );
    return new csQuestions(rows[0]);
  }



  ///---UPDATES CS QUESTION BY ID---///
  static async update ({ category, difficulty, question, answer })
  {
    const{ rows } = await pool.query(
      `UPDATE cs_trivia
      SET
      category = $1,
      difficulty = $2,
      question = $3,
      answer = $4
      RETURNING *`,
      [category, difficulty, question, answer]);

    return new csQuestions(rows[0]);
  }


  ///---REMOVES QUESTION BY ID---///
  static async remove(id)
  {
    const { rows } = await pool.query(
      'DELETE FROM cs_trivia WHERE id = $1', [id]
    );
    return rows[0];
  }
}

