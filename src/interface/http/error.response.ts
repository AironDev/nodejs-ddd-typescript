import {Response} from 'express';

export const CustomErrorResponse = (
  err,
  res: Response,
  message = 'Oops something bad happened',
  consoleLog = false
) => {
  if (err.name === 'ValidationError') {
    const errors = [];
    for (const field in err.errors) {
      errors.push(err.errors[field].message);
      consoleLog && console.log(err.errors[field].message);
    }
    res.status(422).json({
      status: 'error',
      message: message,
      errors: errors,
    });
  }
};
