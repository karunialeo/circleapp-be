import express, { Request, Response } from 'express';
import userRoute from './v1/user.route';
import authRoute from './v1/auth.route';
import threadRoute from './v1/thread.route';

const router = express.Router();

router.use('/users', userRoute);
router.use('/auth', authRoute);
router.use('/thread', threadRoute);

export default router;
