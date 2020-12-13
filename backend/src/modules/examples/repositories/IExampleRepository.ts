import Example from './entities/Example';

export default interface IExampleRepository {
  findById(id: string): Example | undefined;
  findByEmail(email: string): Example | undefined;
  save(example: Example): Example;
}
