"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralRoutes = exports.UserRoutes = void 0;
const GeneralRoutes = router => {
    router.get('/api/v1/health', (req, res) => {
        res.json({
            status: 'success',
            message: 'App is up runnings',
        });
    });
};
exports.GeneralRoutes = GeneralRoutes;
const users_1 = require("./users");
Object.defineProperty(exports, "UserRoutes", { enumerable: true, get: function () { return users_1.UserRoutes; } });
//# sourceMappingURL=index.js.map