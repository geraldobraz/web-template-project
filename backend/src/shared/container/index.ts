import { container } from 'tsyringe';

import IExampleRepository from '@modules/examples/repositories/IExampleRepository';
import ExampleRepository from '@modules/examples/repositories/ExampleRepository';

container.registerSingleton<IExampleRepository>(
  'ExampleRepository',
  ExampleRepository,
);
