const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// admin only
router.get("/admin", authMiddleware, roleMiddleware("admin"), (req, res) => {
  res.json({
    success: true,
    message: "Welcome Admin",
  });
});

// student only
router.get(
  "/student",
  authMiddleware,
  roleMiddleware("student"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Student",
    });
  }
);

module.exports = router;
