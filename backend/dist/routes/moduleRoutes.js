"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moduleController_1 = require("../controllers/moduleController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.route('/')
    .post(authMiddleware_1.protect, authMiddleware_1.adminOnly, moduleController_1.createModule);
router.route('/:id')
    .put(authMiddleware_1.protect, authMiddleware_1.adminOnly, moduleController_1.updateModule)
    .delete(authMiddleware_1.protect, authMiddleware_1.adminOnly, moduleController_1.deleteModule);
exports.default = router;
