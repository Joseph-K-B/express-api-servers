import pool from '../utils/pool.js';

export default class generalTrivia
{

  constructor(row)
  {
    this.id = row.id;
    this.category = row.category;
    this.difficulty = row.difficulty;
    this.question = row.question;
    this.answer = row.answer;
  }


  ///---ADDS GENERAL QUESTION TO SQL TABLE---///
  static async insert({ category, difficulty, question, answer })
  {
    const { rows } = await pool.query(
      `INSERT INTO general_trivia (category, difficulty, question, answer)
          VALUES ($1, $2, $3, $4)
          RETURNING *`,
      [category, difficulty, question, answer]
    );

    return new generalTrivia(rows[0]);
  }



  ///---GETS ALL GENERAL QUESTIONS---///
  static async selectAll()
  {
    const { rows } = await pool.query(
      'SELECT * FROM general_trivia'
    );
    return rows.map((row) => new generalTrivia(row));
  }



  ///---GETS GENERAL BY ID---///
  static async selectId(id)
  {
    const { rows } = await pool.query(`
      SELECT * FROM general_trivia
      WHERE id = $1`, [id]
    ); 
    return new generalTrivia(rows[0]);
  }



  ///---UPDATE---///
  static async update({ category, difficulty, question, answer })
  {
    const { rows } = await pool.query(
      `UPDATE general_trivia
          SET
          category = $1,
          difficulty = $2,
          question = $3,
          answer = $4
          RETURNING *`,
      [category, difficulty, question, answer]);

    return new generalTrivia(rows[0]);
  }



  ///---DELETE---///
  static async remove(id)
  {
    const { rows } = await pool.query(
      'DELETE FROM general_trivia WHERE id = $1', [id]
    );
    return rows[0];
  }
}
