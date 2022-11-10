import {TutorialController} from '../../controllers';

export const UserRoutes = (router, controller: TutorialController) => {
  router.get('/api/v1/tutorials', (req, res) =>
    controller.getTutorials(req, res)
  );

  router.post('/api/v1/tutorials', (req, res) =>
    controller.createTutorial(req, res)
  );

  return router;
};
