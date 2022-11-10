import morgan from 'morgan';
import path from 'path';
import * as rfs from 'rotating-file-stream'; // version 2.x

export const ServerLogs = app => {
  // create a rotating write stream
  const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, '../../../public/logs'),
  });

  // setup the logger
  app.use(morgan('combined', {stream: accessLogStream}));
  app.use(morgan('combined'));
};
