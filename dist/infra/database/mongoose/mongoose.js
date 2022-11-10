"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClientFactory = void 0;
const mongodb_1 = require("mongodb");
class MongoClientFactory {
    constructor(config) {
        const client = new mongodb_1.MongoClient(config.URL, { ignoreUndefined: true });
        client.connect();
        this.client = client;
        this.db = client.db(config.DATABASE_NAME);
        const db = this.db;
        return { client, db };
    }
}
exports.MongoClientFactory = MongoClientFactory;
//# sourceMappingURL=mongoose.js.map