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
exports.UserController = void 0;
class UserController {
    constructor(userApplication) {
        this.userApplication = userApplication;
        this.userApplication = userApplication;
        // super();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const dto: CreateUserDto = this.req.body as CreateUserDto;
            console.log('from users controller');
            try {
                res.json({
                    status: 'success',
                    message: 'App is up runnings',
                });
            }
            catch (err) {
                throw Error('something bad');
            }
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const dto: CreateUserDto = this.req.body as CreateUserDto;
            // this.userApplication.getUsers;
            console.log('this', this.userApplication.getUsers());
            res.json({
                status: 'success',
                message: 'Users retrieved succefully',
                data: [],
            });
            // try {
            //   //const result = await this.userApplication.createUser(dto);
            //   // eslint-disable-next-line no-empty
            // } catch (err) {}
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map