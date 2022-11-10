import {Tutorial, TutorialCollection} from './tutorial.entity';
import {CreateTutorialDto} from './tutorial.dto';

export interface TutorialRepository {
  GetTutorialById(id: string): Promise<Tutorial>;
  CreateTutorial(userParams: CreateTutorialDto): Promise<Tutorial | Error>;
  FindTutorialByTitle(name: string): Promise<TutorialCollection>;
  GetTutorials(): Promise<TutorialCollection>;
}
