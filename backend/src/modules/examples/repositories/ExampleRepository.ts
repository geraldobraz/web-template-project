import Example from './entities/Example';
import IExampleRepository from './IExampleRepository'

class ExampleRepository implements IExampleRepository {
  private _examples: Example[] = [
    {
      id: '1',
      name: 'example1',
      age: 10,
      email: 'email1@email.com'
    },
    {
      id: '2',
      name: 'example2',
      age: 20,
      email: 'email2@email.com'
    },
    {
      id: '3',
      name: 'example3',
      age: 30,
      email: 'email3@email.com'
    },
  ];

  findById(id: string): Example | undefined {
    return this._examples.find(example => example.id === id);
  }
  findByEmail(email: string): Example | undefined {
    return this._examples.find(example => example.email === email);
  }
  save(example: Example): Example {
    this._examples.push(example);

    return example;
  }

}

export default ExampleRepository;
