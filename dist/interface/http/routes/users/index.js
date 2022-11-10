"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const UserRoutes = (router, controller) => {
    router.get('/api/v1/users', (req, res) => {
        return controller.find(req, res);
    });
    //router.post('/api/v1/users', controller);
    return router;
};
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=index.js.map