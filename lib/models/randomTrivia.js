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


  //ADDS QUESTIONS TO SQL TABLE
  static async insert({  category, difficulty, question, answer })
  {
    const { rows } = await pool.query(
      `INSERT INTO randomtrivia (category, difficulty, question, answer) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *`,
      [category, difficulty, question, answer]
    );

    return new randomQuestions(rows[0]);
  }


  //GETS ALL QUESTIONS FROM SQL TABLE
  static async selectAll() 
  {
    const { rows } = await pool.query(
      'SELECT * FROM randomtrivia'
    );
    // console.log('GET ALL????', rows);
    return rows.map((row) => new randomQuestions(row));
  }


  //GETS SPECIFIC QUESTION BY ID FROM SQL TABLE
  static async selectId(id)
  {
    const { rows } = await pool.query(`
    SELECT * FROM randomtrivia
    WHERE id = $1`, [id]
    );
    return new randomQuestions(rows[0]);
  }


  //UPDATES QUESTION BY ID
  static async update(id, category, difficulty, question, answer)
  {
    const{ rows } = await pool.query(
      'UPDATE randomtrivia SET answer = $2 WHERE id = $1 RETURNING *',
      [id, answer]);

    return new randomQuestions(rows[0]);
  }


  //REMOVES QUESTION BY ID
  static async remove(id)
  {
    const { rows } = await pool.query(
      'DELETE FROM randomtrivia WHERE id =$1', [id]
    );
    return rows[0];
  }
}