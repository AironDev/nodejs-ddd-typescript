import {
  Tutorial,
  TutorialCollection,
} from '../../domain/tutorial/tutorial.entity';
import {CreateTutorialDto} from '../../domain/tutorial/tutorial.dto';
import {TutorialRepository} from '../../domain/tutorial/tutorial.repository';
export class TutorialApplication {
  constructor(private tutorialRepository: TutorialRepository) {
    this.tutorialRepository = tutorialRepository;
  }

  public async getTutorials(): Promise<TutorialCollection> {
    return await this.tutorialRepository.GetTutorials();
  }

  public async createTutorial(
    tutorialParams: CreateTutorialDto
  ): Promise<Tutorial | Error> {
    return await this.tutorialRepository.CreateTutorial(tutorialParams);
  }
}
