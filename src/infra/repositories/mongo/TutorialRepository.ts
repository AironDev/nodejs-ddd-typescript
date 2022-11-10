import {TutorialRepository} from '../../../domain/tutorial/tutorial.repository';
import {
  Tutorial,
  TutorialCollection,
} from '../../../domain/tutorial/tutorial.entity';
import {Db} from 'mongodb';
import {Model} from 'mongoose';
import {CreateTutorialDto} from '../../../domain/tutorial/tutorial.dto';
import assert from 'assert';

export class TutorialRepositoryMongoImpl implements TutorialRepository {
  private model: Model<Tutorial>;

  constructor(db: Db, model) {
    this.model = model;
  }

  public async GetTutorialById(id: string): Promise<Tutorial> {
    return;
  }

  public async FindTutorialByTitle(name: string): Promise<TutorialCollection> {
    return;
  }

  public async GetTutorials(): Promise<TutorialCollection> {
    return await this.model.find();
  }

  public async CreateTutorial(
    tutorialParams: CreateTutorialDto
  ): Promise<Tutorial | Error> {
    const tutorial = new this.model({...tutorialParams});
    return await tutorial.save();
  }
}
