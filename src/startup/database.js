import mongoose from 'mongoose';
import winston from 'winston';

class Connection {
  constructor() {
    const url = process.env.DATABASE_URL;
    // eslint-disable-next-line no-console
    console.log('Established DB connection');
    mongoose.Promise = global.Promise;
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(url).then(() => winston.info(`Connected to ${url}`));
  }
}

export default new Connection();
