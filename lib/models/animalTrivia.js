import pool from '../utils/pool.js';

export default class animalQuestions
{
  constructor(row)
  {
    this.id = row.id;
    this.category = row.category;
    this.difficulty = row.difficulty;
    this.question = row.question;
    this.answer = row.answer;    
  }



  ///---ADDS ANIMAL QUESTIONS TO SQL TABLE---///
  static async insert({ category, difficulty, question, answer })
  {
    const { rows } = await pool.query(
      `INSERT INTO animal_trivia (category, difficulty,question, answer)
        VALUES($1, $2, $3, $4)
        RETURNING *`,
      [category, difficulty, question, answer]
    );

    return animalQuestions(rows[0]);
  }



  ///---GETS ALL ANIMAL QUESTIONS---///
  static async selectAll()
  {
    const { rows } = await pool.query(
      'SELECT * FROM animal_trivia'
    );
    return rows.map((row) => new animalQuestions(row));
  }



  ///---GETS ANIMAL QUESTION BY ID---///
  
}
