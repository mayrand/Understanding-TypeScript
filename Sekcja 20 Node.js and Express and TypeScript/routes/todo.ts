import express from 'express';
import { addTodo } from './data.js';
import { todo } from 'node:test';

const router = express.Router();


router.post('/todos', (req, res) => {
    const text = req.body.text;
    const addedTodo = addTodo(text);
    res.json({ message: 'Todo added!', todo: addedTodo });
});

export default router;