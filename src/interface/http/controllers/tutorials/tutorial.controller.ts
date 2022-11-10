import {TutorialApplication} from '../../../../app/tutorial/tutorial.application';
import {Request, Response} from 'express';
import {CreateTutorialDto} from '../../../../domain/tutorial/tutorial.dto';
import {CustomErrorResponse} from '../../error.response';
import {CustomSuccessResponse} from '../../success.response';
export class TutorialController {
  constructor(private tutorialApplication: TutorialApplication) {
    this.tutorialApplication = tutorialApplication;
  }

  public async createTutorial(req: Request, res: Response): Promise<any> {
    const dto: CreateTutorialDto = req.body as CreateTutorialDto;
    try {
      const tutorial = await this.tutorialApplication.createTutorial(dto);
      return CustomSuccessResponse(
        res,
        200,
        'Tutorial created successfully',
        tutorial
      );
    } catch (err) {
      return CustomErrorResponse(err, res); // here
    }
  }

  public async getTutorials(req: Request, res: Response): Promise<any> {
    const tutorials = await this.tutorialApplication.getTutorials();
    return CustomSuccessResponse(
      res,
      200,
      'Tutorials retrieved succefully',
      tutorials
    );
  }
}
