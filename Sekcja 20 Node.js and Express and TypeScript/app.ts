import express, { type NextFunction, type Request, type Response } from 'express';
import todoRoutes from './routes/todo.js'
const app = express();

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());

app.use(todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: 'An error occured' });
})

app.listen(3000);