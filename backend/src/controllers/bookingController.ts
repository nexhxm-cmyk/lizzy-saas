import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { AuthRequest } from '../middlewares/authMiddleware';

export const createBooking = async (req: Request, res: Response): Promise<void> => {
  const { name, email, phone, preferredTime } = req.body;

  try {
    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        preferredTime: new Date(preferredTime),
      },
    });
    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBookings = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateBookingStatus = async (req: AuthRequest, res: Response): Promise<void> => {
  const { status, assignedCloser } = req.body;
  const { id } = req.params;

  try {
    const booking = await prisma.booking.update({
      where: { id: String(id) },
      data: {
        status,
        assignedCloser: assignedCloser || undefined
      }
    });
    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
