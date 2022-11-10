const GeneralRoutes = router => {
  router.get('/api/v1/health', (req, res) => {
    res.json({
      status: 'success',
      message: 'App is up runnings',
    });
  });
};

import {UserRoutes} from './tutorials';
export {UserRoutes, GeneralRoutes};
