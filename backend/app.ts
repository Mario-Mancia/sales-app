import dotenv  from 'dotenv';
import { cors } from 'cors';
import { bodyparser } from 'body-parser';
import { express } from 'express';
dotenv.config();

export const app = express.Router();

app.use('/', cors);
