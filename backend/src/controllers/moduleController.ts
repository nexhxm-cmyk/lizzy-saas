import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { AuthRequest } from '../middlewares/authMiddleware';

export const createModule = async (req: AuthRequest, res: Response): Promise<void> => {
  const { courseId, title, order } = req.body;

  try {
    const moduleItem = await prisma.module.create({
      data: {
        courseId,
        title,
        order: Number(order) || 0
      }
    });
    res.status(201).json(moduleItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateModule = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, order } = req.body;

  try {
    const moduleItem = await prisma.module.update({
      where: { id: String(id) },
      data: { title, order: order !== undefined ? Number(order) : undefined }
    });
    res.json(moduleItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteModule = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.module.delete({ where: { id: String(id) } });
    res.json({ message: 'Module deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
