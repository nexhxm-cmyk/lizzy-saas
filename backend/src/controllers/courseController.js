"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = exports.getCourseById = exports.getCourses = void 0;
const express_1 = require("express");
const db_1 = require("../config/db");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const getCourses = async (req, res) => {
    try {
        const courses = await db_1.prisma.course.findMany({
            include: {
                modules: {
                    include: {
                        lessons: true,
                    },
                },
            },
        });
        res.json(courses);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getCourses = getCourses;
const getCourseById = async (req, res) => {
    try {
        const course = await db_1.prisma.course.findUnique({
            where: { id: String(req.params.id) },
            include: {
                modules: {
                    include: {
                        lessons: true,
                    },
                },
            },
        });
        if (course) {
            res.json(course);
        }
        else {
            res.status(404).json({ message: 'Course not found' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getCourseById = getCourseById;
const createCourse = async (req, res) => {
    const { title, description } = req.body;
    try {
        const course = await db_1.prisma.course.create({
            data: {
                title,
                description,
            },
        });
        res.status(201).json(course);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.createCourse = createCourse;
//# sourceMappingURL=courseController.js.map