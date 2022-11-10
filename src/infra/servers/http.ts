import * as express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

// import {CustomResponse, CustomResponseData} from '../utils/customresponse';

// dotenv.config();

export class HttpServer {
  private server;
  private router;
  private port = process.env.PORT || 4000;
  constructor() {
    this.server = express.default();
    this.router = express.Router();
    this.server.use(bodyParser.urlencoded({extended: true}));
    this.server.use(bodyParser.json());

    this.server.use(helmet.xssFilter());
    this.server.use(helmet.noSniff());
    this.server.use(helmet.hidePoweredBy());
    this.server.use(helmet.frameguard({action: 'deny'}));
  }

  public async start(): Promise<any> {
    await this.server.listen(this.port);

    const server = this.server;
    const router = this.router;
    const port = this.port;
    return {server, router, port};
  }
}
