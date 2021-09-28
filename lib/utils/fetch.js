// import { request } from 'express';
import fetch from 'node-fetch';



export const randomFetch = async () =>
{
  const apiRes = await fetch ('https://opentdb.com/api.php?amount=10');
  const { results } = await apiRes.json();
  
  const details = results.map((arr) =>
    ( 
      {
        category: arr.category,
        difficulty: arr.difficulty,
        question: arr.question,
        answer: arr.correct_answer 
      }
    )
  );
  console.log('Questions!!!', details);
  return details;
};


