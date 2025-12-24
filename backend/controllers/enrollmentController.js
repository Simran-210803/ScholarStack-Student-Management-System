const Enrollment = require("../models/enrollmentModel");

// STUDENT enroll in course
const enrollCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const studentId = req.user._id;

    const alreadyEnrolled = await Enrollment.findOne({
      student: studentId,
      course: courseId,
    });

    if (alreadyEnrolled) {
      return res.json({
        success: false,
        message: "Already enrolled in this course",
      });
    }

    const enrollment = new Enrollment({
      student: studentId,
      course: courseId,
    });

    await enrollment.save();

    res.json({
      success: true,
      message: "Enrolled successfully",
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

// STUDENT view own courses (OWNERSHIP)
const myCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      student: req.user._id,
    }).populate("course");

    res.json({
      success: true,
      data: enrollments,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

module.exports = { enrollCourse, myCourses };
