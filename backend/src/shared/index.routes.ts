import { Router } from 'express';
import exampleRouter from '../modules/examples/routes/example.routes';

const router = Router();

router.use('/example', exampleRouter);

export default router;
