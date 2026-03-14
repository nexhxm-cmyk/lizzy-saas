"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moderateMessage = exports.getMessagesByCourse = void 0;
const express_1 = require("express");
const db_1 = require("../config/db");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const getMessagesByCourse = async (req, res) => {
    try {
        const courseId = String(req.params.courseId);
        const messages = await db_1.prisma.chatMessage.findMany({
            where: { courseId },
            include: {
                user: {
                    select: { id: true, name: true, avatar: true, role: true }
                }
            },
            orderBy: { createdAt: 'asc' }
        });
        res.json(messages);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getMessagesByCourse = getMessagesByCourse;
const moderateMessage = async (req, res) => {
    const { id } = req.params;
    const { action } = req.body; // 'pin', 'delete', 'hide'
    try {
        const message = await db_1.prisma.chatMessage.findUnique({
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
            await db_1.prisma.chatMessage.delete({ where: { id: String(id) } });
            res.json({ message: 'Message deleted' });
            return;
        }
        const updatedMessage = await db_1.prisma.chatMessage.update({
            where: { id: String(id) },
            data: {
                pinned: action === 'pin' ? !message.pinned : message.pinned,
                hidden: action === 'hide' ? !message.hidden : message.hidden,
            }
        });
        res.json(updatedMessage);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.moderateMessage = moderateMessage;
//# sourceMappingURL=chatController.js.map