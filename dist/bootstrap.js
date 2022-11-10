"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitApplication = void 0;
const app_1 = require("./app");
const controllers_1 = require("./interface/http/controllers");
const repositories_1 = require("./infra/repositories");
const routes_1 = require("./interface/http/routes");
// USER
const userApplication = new app_1.UserApplication(repositories_1.UserRepositoryImpl);
const userController = new controllers_1.UserController(userApplication);
// OFFERS
// const UserRepository = new UserRepositoryImpl();
// const userApplication = new UserApplication(UserRepository);
// const userController = new UserController(userApplication);
const InitApplication = (router, app) => {
    (0, routes_1.UserRoutes)(router, userController);
    (0, routes_1.GeneralRoutes)(router);
    app.use(router);
};
exports.InitApplication = InitApplication;
//# sourceMappingURL=bootstrap.js.map