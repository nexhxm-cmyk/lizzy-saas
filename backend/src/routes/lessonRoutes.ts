import express from 'express';
import { createLesson, updateLesson, deleteLesson } from '../controllers/lessonController';
import { protect, adminOnly } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/')
  .post(protect, adminOnly, createLesson);

router.route('/:id')
  .put(protect, adminOnly, updateLesson)
  .delete(protect, adminOnly, deleteLesson);

export default router;
