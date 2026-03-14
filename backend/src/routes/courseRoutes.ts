import express from 'express';
import { getCourses, getCourseById, createCourse } from '../controllers/courseController';
import { protect, adminOnly, teamOrAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/')
  .get(protect, getCourses)
  .post(protect, adminOnly, createCourse);

router.route('/:id')
  .get(protect, getCourseById);

export default router;
