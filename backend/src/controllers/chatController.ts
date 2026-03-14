import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { AuthRequest } from '../middlewares/authMiddleware';

export const getMessagesByCourse = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const courseId = String(req.params.courseId);
    const messages = await prisma.chatMessage.findMany({
      where: { courseId },
      include: {
        user: {
          select: { id: true, name: true, avatar: true, role: true }
        }
      },
      orderBy: { createdAt: 'asc' }
    });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const moderateMessage = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  const { action } = req.body; // 'pin', 'delete', 'hide'

  try {
    const message = await prisma.chatMessage.findUnique({
      where: { id: String(id) },
      include: { user: true }
    });

    if (!message) {
      res.status(404).json({ message: 'Message not found' });
      return;
    }

    if (req.user?.role === 'TEAM') {
       if (message.user.role === 'ADMIN' && action === 'delete') {
            res.status(403).json({ message: 'Team cannot delete admin messages' });
            return;
       }
       if (action === 'pin') {
            res.status(403).json({ message: 'Team cannot pin messages' });
            return;
       }
    }

    if (action === 'delete') {
      await prisma.chatMessage.delete({ where: { id: String(id) } });
      res.json({ message: 'Message deleted' });
      return;
    }

    const updatedMessage = await prisma.chatMessage.update({
      where: { id: String(id) },
      data: {
        pinned: action === 'pin' ? !message.pinned : message.pinned,
        hidden: action === 'hide' ? !message.hidden : message.hidden,
      }
    });

    res.json(updatedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
