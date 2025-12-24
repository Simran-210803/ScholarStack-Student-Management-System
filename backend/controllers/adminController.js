const User = require("../models/userModel");
const Enrollment = require("../models/enrollmentModel");
const Course = require("../models/courseModel");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" }).select(
      "_id name email createdAt"
    );

    const result = await Promise.all(
      students.map(async (student) => {
        const enrollments = await Enrollment.find({
          student: student._id,
        }).populate("course", "title description");

        // ✅ FILTER OUT BROKEN ENROLLMENTS
        const validEnrollments = enrollments.filter((e) => e.course);

        return {
          _id: student._id,
          name: student.name,
          age: student.age,
          city: student.city,
          email: student.email,
          joinedAt: student.createdAt,
          totalCourses: validEnrollments.length,
          courses: validEnrollments.map((e) => ({
            _id: e.course._id,
            title: e.course.title,
            description: e.course.description,
          })),
        };
      })
    );

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.error("ADMIN STUDENTS ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getAdminStats = async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: "student" });
    const totalCourses = await Course.countDocuments();

    res.json({
      success: true,
      data: {
        students: totalStudents,
        courses: totalCourses,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
