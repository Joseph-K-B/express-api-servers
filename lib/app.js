import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import randomTrivia from './controllers/randomQuestions.js';
import csTrivia from './controllers/csQuestions.js';

const app = express();

app.use(express.json());
app.use('/api/trivia/random', randomTrivia);
app.use('/api/trivia/cs', csTrivia);


app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
