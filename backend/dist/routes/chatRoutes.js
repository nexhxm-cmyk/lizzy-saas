"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatController_1 = require("../controllers/chatController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.route('/:courseId')
    .get(authMiddleware_1.protect, chatController_1.getMessagesByCourse);
router.route('/moderate/:id')
    .put(authMiddleware_1.protect, authMiddleware_1.teamOrAdmin, chatController_1.moderateMessage);
exports.default = router;
