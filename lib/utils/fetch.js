// import { request } from 'express';
import fetch from 'node-fetch';


///---FETCHES 10 RANDOM TRIVIA QUESTIONS---///
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
  
  
  return details;
};



///---FETCHES 10 COMPUTER SCIENCE TRIVIA QUESTIONS---///
export const csFetch = async () =>
{
  const apiRes = await fetch ('https://opentdb.com/api.php?amount=10&category=18');
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
  return details;
};



///---FETCHES 10 ANIMAL TRIVIA QUESTIONS---///
export const animalFetch = async () =>
{
  const apiRes = await fetch('https://opentdb.com/api.php?amount=10&category=27');
  const { results } = await apiRes.json();
  const details = results.map((arr) => 
    (
      {
        category: arr.category,
        difficulty: arr.difficuty,
        question: arr.question,
        answer: arr.correct_answer
      }
    )
  );
  return details;
};



///---FETCHES 10 ___ TRIVIA QUESTIONS---///
export const historyFetch = async () =>
{
  const apiRes = await fetch('https://opentdb.com/api.php?amount=10&category=23');
  const { results } = await apiRes.json();
  const details = await results.map((arr) =>
    (
      {
        category: arr.category,
        difficulty: arr.difficuty,
        question: arr.question,
        answer: arr.correct_answer
      }
    )
  );
  return details;
};



///---FETCHES 10 GENERAL QUESTIONS---///
export const generalFetch = async () =>
{
  const apiRes = await fetch('https://opentdb.com/api.php?amount=10&category=9');
  const { results } = await apiRes.json();
  const details = await results.map((arr) =>
    (
      {
        category: arr.category,
        difficulty: arr.difficuty,
        question: arr.question,
        answer: arr.correct_answer
      }
    )
  );
  console.log('GENERAL FETCH', details);
  return details;
};
