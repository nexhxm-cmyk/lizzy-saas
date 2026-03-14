import express from 'express';
import { getMessagesByCourse, moderateMessage } from '../controllers/chatController';
import { protect, teamOrAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/:courseId')
  .get(protect, getMessagesByCourse);

router.route('/moderate/:id')
  .put(protect, teamOrAdmin, moderateMessage);

export default router;
