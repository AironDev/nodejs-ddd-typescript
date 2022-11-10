import {MongoClient, Db} from 'mongodb';
import {MongoConfig} from './config';
import {ConnectOptions} from 'mongoose';
import mongoose from 'mongoose';
// import {TutorialSchema} from './schemas/toturial';

export class MongoClientFactory {
  public client: MongoClient;
  public db: Db;
  constructor(config: MongoConfig) {
    const client = new MongoClient(config.URL, {
      ignoreUndefined: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    try {
      client
        .connect()
        .then(() => console.log('Database connected!'))
        .catch(err => console.log(err));
    } finally {
      // client.close();
    }

    const db = client.db(config.DATABASE_NAME);
    return {client, db};
  }
}

export class MongoConnection {
  public client: MongoClient;
  public db: Db;
  public connection;

  constructor(config: MongoConfig) {
    const url = config.URL + '/' + config.DATABASE_NAME;
    mongoose.set('debug', true);
    mongoose
      .connect(url)
      .then(() => console.log('Database connected!'))
      .catch(err => console.log(err));

    this.connection = mongoose.createConnection(
      'mongodb://localhost:27017/lll'
    );

    this.client = mongoose.connection.getClient();
    this.db = this.client.db();
  }

  public migrate() {
    const name = 'tutorials';
    async function doesCollectionExistInDb(db, collectionName) {
      const collections = await db.collections();
      return collections.some(
        collection => collection.collectionName === collectionName
      );
    }

    if (!doesCollectionExistInDb(this.db, name)) {
      this.db.createCollection('tutorials', {});
    }
  }
}
