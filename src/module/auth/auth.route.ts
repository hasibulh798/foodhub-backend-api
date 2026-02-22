import {Router} from 'express'
import { auth } from '../../middleware/auth';
import { UserRole } from '../../../generated/prisma/enums';
import { authController } from './auth.controller';


const router = Router();

router.get('/users', auth(UserRole.ADMIN), authController.getAllUsers);
router.patch('/users/:userId', auth(UserRole.ADMIN), authController.updateUserStatus);

export const authRoutes = router;