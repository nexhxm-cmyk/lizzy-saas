"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLesson = exports.updateLesson = exports.createLesson = void 0;
const db_1 = require("../config/db");
const createLesson = async (req, res) => {
    const { moduleId, title, videoUrl, order } = req.body;
    try {
        const lesson = await db_1.prisma.lesson.create({
            data: {
                moduleId,
                title,
                videoUrl,
                order: Number(order) || 0
            }
        });
        res.status(201).json(lesson);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.createLesson = createLesson;
const updateLesson = async (req, res) => {
    const { id } = req.params;
    const { title, videoUrl, order } = req.body;
    try {
        const lesson = await db_1.prisma.lesson.update({
            where: { id: String(id) },
            data: {
                title,
                videoUrl,
                order: order !== undefined ? Number(order) : undefined
            }
        });
        res.json(lesson);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.updateLesson = updateLesson;
const deleteLesson = async (req, res) => {
    const { id } = req.params;
    try {
        await db_1.prisma.lesson.delete({ where: { id: String(id) } });
        res.json({ message: 'Lesson deleted' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.deleteLesson = deleteLesson;
