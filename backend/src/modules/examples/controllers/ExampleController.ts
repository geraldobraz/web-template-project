import { Request, Response } from 'express';
import ExampleRepository from '../repositories/ExampleRepository';

const exampleRepository = new ExampleRepository();

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;
    const example = exampleRepository.findByEmail(email);

    return response.json({ example });
  }
}
