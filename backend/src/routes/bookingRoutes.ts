import express from 'express';
import { createBooking, getBookings, updateBookingStatus } from '../controllers/bookingController';
import { protect, teamOrAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/')
  .post(createBooking)
  .get(protect, teamOrAdmin, getBookings);

router.route('/:id')
  .put(protect, teamOrAdmin, updateBookingStatus);

export default router;
