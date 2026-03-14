"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const bookingRoutes_1 = __importDefault(require("./routes/bookingRoutes"));
const chatRoutes_1 = __importDefault(require("./routes/chatRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const moduleRoutes_1 = __importDefault(require("./routes/moduleRoutes"));
const lessonRoutes_1 = __importDefault(require("./routes/lessonRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: process.env.CLIENT_URL || 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
});
// Middleware
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
}));
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// Routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/courses', courseRoutes_1.default);
app.use('/api/bookings', bookingRoutes_1.default);
app.use('/api/chat', chatRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use('/api/modules', moduleRoutes_1.default);
app.use('/api/lessons', lessonRoutes_1.default);
// Basic health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Lizzy Academy Server is running' });
});
// Setup Socket.io
io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);
    socket.on('join_course', (courseId) => {
        socket.join(courseId);
        console.log(`User joined course room: ${courseId}`);
    });
    socket.on('send_message', async (data) => {
        try {
            // Save to database
            const message = await db_1.prisma.chatMessage.create({
                data: {
                    courseId: data.courseId,
                    userId: data.userId,
                    content: data.content,
                },
                include: {
                    user: {
                        select: { id: true, name: true, avatar: true, role: true }
                    }
                }
            });
            // Emit to all clients in the course room
            io.to(data.courseId).emit('receive_message', message);
        }
        catch (error) {
            console.error('Error saving message:', error);
        }
    });
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});
// Start Server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
