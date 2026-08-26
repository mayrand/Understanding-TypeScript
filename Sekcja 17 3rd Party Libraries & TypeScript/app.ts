import fs from 'node:fs';
import { z } from 'zod';

const dataSchema = z.object({
    title: z.string(),
    id: z.number(),
    values: z.array(z.string())
});
const content = JSON.parse(fs.readFileSync('data.json').toString());
const parsedData = dataSchema.parse(content);
console.log(parsedData.title);