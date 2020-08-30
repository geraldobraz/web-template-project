import { Router } from 'express';
import ExampleRepository from '../repositories/ExampleRepository';

const exampleRouter = Router();
const exampleRepository = new ExampleRepository();

exampleRouter.get('/', (req, res) => {
    const example = exampleRepository.getNames();
    res.json({example});
})

export default exampleRouter;
