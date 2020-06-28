import ExampleRepository from '../repositories/ExampleRepository';

class ExampleService {

  private _exampleRepository: ExampleRepository;

  /**
   * Creates an instance of ExampleService.
   * @param {ExampleRepository} exampleRepository
   * @memberof ExampleService
   */
  constructor(exampleRepository: ExampleRepository) {
    this._exampleRepository = exampleRepository;
  }

  public getName() {
    return this._exampleRepository.getNames();
  }
}

export default ExampleService;
