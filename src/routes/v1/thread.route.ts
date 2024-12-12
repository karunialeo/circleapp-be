import express from 'express';
import { createThread } from '../../controllers/thread.controller';
import { authentication } from '../../middlewares/authentication';
import { upload } from '../../middlewares/upload-file';

const threadRoute = express.Router();

threadRoute.post('/', authentication, upload, createThread);

export default threadRoute;
