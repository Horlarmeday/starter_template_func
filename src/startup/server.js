/* eslint-disable import/first */
import '../config/env';
import express from 'express';
import staffRoutes from '../routes/staffRoutes';
import error from '../middleware/error';

const server = express();

import './logger';
import './database';
import './validation';

server.use(express.json());
server.use('/api/staff', staffRoutes);
server.use(error);

export default server;
