import Example from '../models/Example';

class ExampleRepository {

  private _examples: Example[] =[
    new Example('Test1','Test1 description'),
    new Example('Test2','Test2 description'),
    new Example('Test3','Test3 description'),
  ]

  /**
   * getNames
   * @memberof ExampleRepository
   */
  public getNames() {
    return this._examples.map(e => e.name);
  }
}

export default ExampleRepository;
