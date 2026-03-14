import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { AuthRequest } from '../middlewares/authMiddleware';

export const createLesson = async (req: AuthRequest, res: Response): Promise<void> => {
  const { moduleId, title, videoUrl, order } = req.body;

  try {
    const lesson = await prisma.lesson.create({
      data: {
        moduleId,
        title,
        videoUrl,
        order: Number(order) || 0
      }
    });
    res.status(201).json(lesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateLesson = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, videoUrl, order } = req.body;

  try {
    const lesson = await prisma.lesson.update({
      where: { id: String(id) },
      data: {
        title,
        videoUrl,
        order: order !== undefined ? Number(order) : undefined
      }
    });
    res.json(lesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteLesson = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.lesson.delete({ where: { id: String(id) } });
    res.json({ message: 'Lesson deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
