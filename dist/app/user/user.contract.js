"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContract = void 0;
const _serializeSingleUser = user => {
    return {
        id: user.id,
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
    };
};
class UserContract {
    serialize(data) {
        if (!data) {
            throw new Error('Expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleUser);
        }
        return _serializeSingleUser(data);
    }
}
exports.UserContract = UserContract;
//# sourceMappingURL=user.contract.js.map