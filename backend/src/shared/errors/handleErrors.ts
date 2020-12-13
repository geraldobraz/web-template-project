import { Request, Response, NextFunction } from 'express';
import AppError from './AppError';

export default function handleErrors(
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction,
): Response {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
