import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './public/swagger.json';
import dotenv from 'dotenv';
import apiRouter from './src/routes';
dotenv.config();

const PORT: string | undefined = process.env.PORT || '8000';

const server = express();

server.get('/', (req: Request, res: Response) => {
  return res.redirect('/api');
});

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.use('/api', apiRouter);

server.listen(PORT, () => {
  console.log(`[SUCCESS]: Server deployed on http://localhost:${PORT}`);
});
