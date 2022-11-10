"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomResponse = void 0;
class CustomResponse {
    constructor(response) {
        this.status = response.status;
        this.message = response.message;
        this.code = response.code;
        this.exception = response.exception;
        this.data = response.data;
    }
    send(res) {
        const { message, code } = this;
        res.status(code).json(message);
    }
    setStatus(status) {
        this.status = status;
    }
    setHttpCode(code) {
        this.code = code;
    }
    setException(exception = true) {
        this.exception = exception;
    }
    setData(data) {
        this.data = data;
    }
    addMessage(message) {
        this.message = message;
    }
}
exports.CustomResponse = CustomResponse;
//# sourceMappingURL=customresponse.js.map