import {InitApplication} from './bootstrap';
import {HttpServer} from './infra/servers/http';
import {ServerLogs} from './infra/logger/access_logs';

// Start the server
const start = async () => {
  try {
    const httpServer = new HttpServer();
    const {server, router, port} = await httpServer.start();
    ServerLogs(server);
    InitApplication(router, server);
    console.log('Server running at:', port);
  } catch (err) {
    console.log(err);
  }
};

start();
