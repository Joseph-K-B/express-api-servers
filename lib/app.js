import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import randomTrivia from './controllers/randomQuestions.js';
import csTrivia from './controllers/csQuestions.js';
import animalTrivia from './controllers/animalQuestions.js';
import historyTrivia from './controllers/historyQuestions.js';
import generalTrivia from './controllers/generalQuestions.js';

const app = express();

app.use(express.json());
app.use('/api/random', randomTrivia);
app.use('/api/cs', csTrivia);
app.use('/api/animal', animalTrivia);
app.use('/api/history', historyTrivia);
app.use('/api/general', generalTrivia);


app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
