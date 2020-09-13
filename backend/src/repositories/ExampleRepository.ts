import Example from '../models/Example';

class ExampleRepository {
  private _examples: Example[] = [
    new Example('Test1', 'Test1 description'),
    new Example('Test2', 'Test2 description'),
    new Example('Test3', 'Test3 description'),
  ];

  private _secrets: Example[] = [
    new Example('Secret1', 'Secret1 description'),
    new Example('Secret2', 'Secret2 description'),
    new Example('Secret3', 'Secret3 description'),
  ];

  /**
   * getNames
   * @memberof ExampleRepository
   */
  public getNames(): string[] {
    return this._examples.map(e => e.name);
  }

  /**
   * getSecrets
   * @memberof ExampleRepository
   */
  public getSecrets(): Example[] {
    return this._secrets;
  }
}

export default ExampleRepository;
