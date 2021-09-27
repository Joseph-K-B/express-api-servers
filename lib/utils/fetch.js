// import { request } from 'express';
import fetch from 'node-fetch';



export const randomFetch = async () =>
{
  const apiRes = await fetch ('https://opentdb.com/api.php?amount=10');
  const res = await apiRes.json();
  console.log('Questions!!!', res);
  return res;
};


