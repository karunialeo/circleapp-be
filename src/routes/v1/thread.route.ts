import express from 'express';
import {
  createThread,
  deleteThread,
  getAllThreads,
} from '../../controllers/thread.controller';
import { authentication } from '../../middlewares/authentication';
import { upload } from '../../middlewares/upload-file';

const threadRoute = express.Router();

threadRoute.post('/', authentication, upload, createThread);
threadRoute.get('/', authentication, getAllThreads);
threadRoute.delete('/:id', authentication, deleteThread);

export default threadRoute;
