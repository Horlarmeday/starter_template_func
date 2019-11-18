import winston from 'winston';
import { port } from './src/config/secret';
import server from './src/startup/server';

server.listen(port, () => winston.info(`Running on port ${port}...`));
