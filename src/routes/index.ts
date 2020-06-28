import { Router } from 'express';
import exampleRouter from './example.routes';

const router = Router();

router.use('/example', exampleRouter);

export default router;
