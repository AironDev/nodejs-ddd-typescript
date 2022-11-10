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
exports.UserMongoRepository = void 0;
class UserMongoRepository {
    constructor(db) {
        this.collectionName = 'users';
        this.database = db;
        this.collection = db.collection(this.collectionName);
    }
    //change return type to User latter
    GetUserById(id) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    //change return type to User latter
    FindUsersByName(id) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    //change return type to User latter
    GetUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.database
            // this.collection.updateOne({a: 1}, {b: 1}, {upsert: true});
            const updateResult = yield this.collection.updateOne({ a: 3 }, { $set: { b: 1 } });
            console.log('Updated documents =>', updateResult);
            return [];
        });
    }
    CreateUser(userParams) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
}
exports.UserMongoRepository = UserMongoRepository;
//# sourceMappingURL=UserMongoRepository.js.map