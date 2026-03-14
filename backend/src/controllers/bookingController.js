"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingStatus = exports.getBookings = exports.createBooking = void 0;
const express_1 = require("express");
const db_1 = require("../config/db");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const createBooking = async (req, res) => {
    const { name, email, phone, preferredTime } = req.body;
    try {
        const booking = await db_1.prisma.booking.create({
            data: {
                name,
                email,
                phone,
                preferredTime: new Date(preferredTime),
            },
        });
        res.status(201).json(booking);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.createBooking = createBooking;
const getBookings = async (req, res) => {
    try {
        const bookings = await db_1.prisma.booking.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(bookings);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getBookings = getBookings;
const updateBookingStatus = async (req, res) => {
    const { status, assignedCloser } = req.body;
    const { id } = req.params;
    try {
        const booking = await db_1.prisma.booking.update({
            where: { id: String(id) },
            data: {
                status,
                assignedCloser: assignedCloser || undefined
            }
        });
        res.json(booking);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.updateBookingStatus = updateBookingStatus;
//# sourceMappingURL=bookingController.js.map