import express from 'express';
import { createModule, updateModule, deleteModule } from '../controllers/moduleController';
import { protect, adminOnly } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/')
  .post(protect, adminOnly, createModule);

router.route('/:id')
  .put(protect, adminOnly, updateModule)
  .delete(protect, adminOnly, deleteModule);

export default router;
