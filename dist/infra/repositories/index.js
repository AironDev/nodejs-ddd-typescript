"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
const UserMongoRepository_1 = require("./users/UserMongoRepository");
const mongoose_1 = require("../database/mongoose/mongoose");
const config = {
    URL: 'mongodb://localhost:27017',
    DATABASE_NAME: 'lnaiddb',
};
const { client, db } = new mongoose_1.MongoClientFactory(config);
const UserRepositoryImpl = new UserMongoRepository_1.UserMongoRepository(db);
exports.UserRepositoryImpl = UserRepositoryImpl;
//# sourceMappingURL=index.js.map