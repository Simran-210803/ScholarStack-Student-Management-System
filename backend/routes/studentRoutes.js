const express = require("express");
const router = express.Router();

const {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// ADMIN ONLY ROUTES
router.get("/", authMiddleware, roleMiddleware("admin"), getStudents);
router.post("/", authMiddleware, roleMiddleware("admin"), createStudent);
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateStudent);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteStudent);

module.exports = router;
