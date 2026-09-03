import express from 'express';
import todoRoutes from './routes/todo.js'
const app = express();

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());

app.use(todoRoutes);

app.listen(3000);