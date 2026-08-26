import fs from 'node:fs';
import { z } from 'zod';

const dataSchema = z.string();
const content = fs.readFileSync('data.json');
const parsedData = dataSchema.parse(content);