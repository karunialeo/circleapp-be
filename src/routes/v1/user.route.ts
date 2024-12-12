import express from 'express';
import {
  deleteUser,
  getAllUsers,
  updateUser,
} from '../../controllers/user.controller';
import { authentication } from '../../middlewares/authentication';

const userRoute = express.Router();

userRoute.get('/', authentication, getAllUsers);
userRoute.put('/:id', authentication, updateUser);
userRoute.delete('/:id', deleteUser);

export default userRoute;
