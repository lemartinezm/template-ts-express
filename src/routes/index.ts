import { Request, Response, Router } from 'express';
import helloRouter from './hello.routes';

const apiRouter = Router();

apiRouter.use('/hello', helloRouter);

apiRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    status: 200,
    message: 'Welcome to my API',
  });
});

export default apiRouter;
