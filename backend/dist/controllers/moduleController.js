"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteModule = exports.updateModule = exports.createModule = void 0;
const db_1 = require("../config/db");
const createModule = async (req, res) => {
    const { courseId, title, order } = req.body;
    try {
        const moduleItem = await db_1.prisma.module.create({
            data: {
                courseId,
                title,
                order: Number(order) || 0
            }
        });
        res.status(201).json(moduleItem);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.createModule = createModule;
const updateModule = async (req, res) => {
    const { id } = req.params;
    const { title, order } = req.body;
    try {
        const moduleItem = await db_1.prisma.module.update({
            where: { id: String(id) },
            data: { title, order: order !== undefined ? Number(order) : undefined }
        });
        res.json(moduleItem);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.updateModule = updateModule;
const deleteModule = async (req, res) => {
    const { id } = req.params;
    try {
        await db_1.prisma.module.delete({ where: { id: String(id) } });
        res.json({ message: 'Module deleted' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.deleteModule = deleteModule;
