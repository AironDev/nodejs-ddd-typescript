"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("./bootstrap");
const http_1 = require("./infra/servers/http");
const access_logs_1 = require("./infra/logger/access_logs");
// Start the server
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const httpServer = new http_1.HttpServer();
        const { server, router, port } = yield httpServer.start();
        (0, access_logs_1.ServerLogs)(server);
        (0, bootstrap_1.InitApplication)(router, server);
        console.log('Server running at:', port);
    }
    catch (err) {
        console.log(err);
    }
});
start();
//# sourceMappingURL=main.js.map