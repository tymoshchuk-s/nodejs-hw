import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserSession,
} from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/register', celebrate(registerUserSchema), registerUser);

authRouter.post('/login', celebrate(loginUserSchema), loginUser);

authRouter.post('/logout', logoutUser);

authRouter.post('/refresh', refreshUserSession);

export default authRouter;
