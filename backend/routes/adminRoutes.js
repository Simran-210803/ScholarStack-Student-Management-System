const express = require("express");
const router = express.Router();

const {
    getAllStudents,
    getAdminStats
} = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

/**
 * ADMIN: Dashboard stats
 * GET /admin/stats
 */
router.get(
    "/stats",
    authMiddleware,
    roleMiddleware("admin"),
    getAdminStats
);

/**
 * ADMIN: Get all students with enrollments
 * GET /admin/students
 */
router.get(
    "/students",
    authMiddleware,
    roleMiddleware("admin"),
    getAllStudents
);

module.exports = router;
