import express from 'express';
import { getUsers, updateUserRole, deleteUser } from '../controllers/userController';
import { protect, adminOnly, teamOrAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/')
  .get(protect, teamOrAdmin, getUsers);

router.route('/:id/role')
  .put(protect, adminOnly, updateUserRole);

router.route('/:id')
  .delete(protect, adminOnly, deleteUser);

export default router;
