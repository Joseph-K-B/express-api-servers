// import { historyFetch } from '../utils/fetch.js';
import pool from '../utils/pool.js';

export default class historyTrivia {
  id;
  category;
  difficulty;
  question;
  answer;


  constructor(row)
  {
    this. id = row.id;
    this.category = row.category;
    this.difficulty = row.difficulty;
    this.question = row.question;
    this.answer = row.answer;
  }



  ///---ADDS HISTORY QUESTION TO SQL TABLE---///
  static async insert({ category, difficuty, question, answer })
  {
    const { rows } = await pool.query(
      `INSERT INTO history_trivia (category, difficulty, question, answer)
          VALUES($1, $2, $3, $4)
          RETURNING *`,
      [category, difficuty, question, answer]
    );

    return new historyTrivia(rows[0]);
  }



  ///---GETS ALL HISTORY QUESTIONS---///
  static async selectAll()
  {
    const { rows } = await pool.query(
      'SELECT * FROM history_trivia'
    );
    return rows.map((row) => new historyTrivia(row));
  }



  ///---GETS HISTORY QUESTIONS BY ID---///
  static async selectId(id)
  {
    const { rows } = await pool.query(`
    SELECT * FROM history_trivia
    WHERE id = $1`, [id]
    );
    return new historyTrivia(rows[0]);
  }


  ///---UPDATED QUESTION BY ID---///
  static async update (id, category, difficulty, question, answer)
  {
    const { rows } = await pool.query(
      `UPDATE history_trivia
      SET
      category = $1,
      difficulty = $2,
      question = $3,
      answer = $4
      RETURNING *`,
      [id, category, difficulty, question, answer]);

    return new historyTrivia(rows[0]);
  }




  ///---REMOVES QUESTION BY ID---///
  static async remove(id)
  {
    const { rows } = await pool.query(
      'DELETE FROM history_trivia WHERE id = $1', [id]
    );
    return rows[0];
  }
}
