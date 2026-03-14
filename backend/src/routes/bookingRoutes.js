"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingController_1 = require("../controllers/bookingController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.route('/')
    .post(bookingController_1.createBooking)
    .get(authMiddleware_1.protect, authMiddleware_1.teamOrAdmin, bookingController_1.getBookings);
router.route('/:id')
    .put(authMiddleware_1.protect, authMiddleware_1.teamOrAdmin, bookingController_1.updateBookingStatus);
exports.default = router;
//# sourceMappingURL=bookingRoutes.js.map