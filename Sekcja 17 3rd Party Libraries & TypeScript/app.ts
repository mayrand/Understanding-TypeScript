import fs from 'node:fs';
import { z } from 'zod';

const dataSchema = z.object({
    title: z.string(),
    id: z.number(),
    values: z.array(z.string())
});

type Data = z.infer<typeof dataSchema>;

function output(data: Data) {
    console.log(data);
}

const content = JSON.parse(fs.readFileSync('data.json').toString());
const parsedData = dataSchema.parse(content);
output(parsedData);