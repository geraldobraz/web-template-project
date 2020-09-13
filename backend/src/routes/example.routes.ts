import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ExampleRepository from '../repositories/ExampleRepository';

const exampleRouter = Router();
const exampleRepository = new ExampleRepository();

exampleRouter.get('/', (req, res) => {
  const example = exampleRepository.getNames();
  res.json({ example });
});

exampleRouter.get('/secrets', ensureAuthenticated, (req, res) => {
  const example = exampleRepository.getSecrets();
  res.json({ example });
});

export default exampleRouter;
