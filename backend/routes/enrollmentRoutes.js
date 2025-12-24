const express = require("express");
const router = express.Router();

const {
  enrollCourse,
  myCourses,
} = require("../controllers/enrollmentController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Enroll in course
router.post(
  "/:courseId",
  authMiddleware,
  roleMiddleware("student"),
  enrollCourse
);

// View own courses
router.get("/my-courses", authMiddleware, roleMiddleware("student"), myCourses);

module.exports = router;
