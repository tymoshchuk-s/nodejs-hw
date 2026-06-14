import { Router } from 'express';
import { authenicate } from '../middleware/authenticate.js';
import { updateUserAvatar } from '../controllers/userController.js';
import { upload } from '../middleware/multer.js';

const userRouter = Router();

userRouter.patch(
  'users/me/avatar',
  authenicate,
  upload.single('avatar'),
  updateUserAvatar,
);

export default userRouter;
