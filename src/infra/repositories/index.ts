import {TutorialRepositoryMongoImpl} from './mongo/TutorialRepository';
import {MongoConnection, TutorialModel, MongoConfig} from '../database/mongo';

const config: MongoConfig = {
  URL: 'mongodb://localhost:27017',
  DATABASE_NAME: 'lnaiddb',
};

const mongo = new MongoConnection(config);
const db = mongo.db;
// const client = mongo.client
// const connection = mongo.connection
mongo.migrate();

const TutorialRepository = new TutorialRepositoryMongoImpl(db, TutorialModel);
export {TutorialRepository};
