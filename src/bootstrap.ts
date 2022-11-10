import {TutorialApplication} from './app';
import {TutorialController} from './interface/http/controllers';
import {TutorialRepository} from './infra/repositories';
import {UserRoutes, GeneralRoutes} from './interface/http/routes';

// TUTORIAL
const tutorialApplication = new TutorialApplication(TutorialRepository);
const tutorialController = new TutorialController(tutorialApplication);

export const InitApplication = (router, app) => {
  UserRoutes(router, tutorialController);
  GeneralRoutes(router);

  app.use(router);
};
