const express = require("express");
const router = express.Router();

const {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse,
} = require("../controllers/courseController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// ✅ Admin + Student can view courses
router.get(
    "/",
    authMiddleware,
    roleMiddleware("admin", "student"),
    getCourses
);

// ✅ Admin only: create course
router.post(
    "/",
    authMiddleware,
    roleMiddleware("admin"),
    createCourse
);

// ✅ Admin only: edit course
router.put(
    "/:id",
    authMiddleware,
    roleMiddleware("admin"),
    updateCourse
);

// ✅ Admin only: delete course
router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware("admin"),
    deleteCourse
);

module.exports = router;
