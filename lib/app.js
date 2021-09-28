import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import randomTrivia from './controllers/randomQuestions.js';

const app = express();

app.use(express.json());
app.use('/api/random', randomTrivia);


app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
