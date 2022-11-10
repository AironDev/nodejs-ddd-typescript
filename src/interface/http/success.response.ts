import {Response} from 'express';

export const CustomSuccessResponse = (
  res: Response,
  httpCode = 200,
  message = 'Oops something bad happened',
  data = null
) => {
  res.status(httpCode).json({
    status: 'success',
    message: message,
    data: data,
  });
};
