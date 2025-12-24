const Student = require("../models/studentModel");

// GET all students (ADMIN)
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ success: true, data: students });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

// CREATE student (ADMIN)
const createStudent = async (req, res) => {
  try {
    const { name, age, city } = req.body;

    if (!name || !age || !city) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    const student = new Student({ name, age, city });
    await student.save();

    res.json({
      success: true,
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

// UPDATE student (ADMIN)
const updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.json({
        success: false,
        message: "Student not found",
      });
    }

    res.json({
      success: true,
      message: "Student updated",
      data: updated,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

// DELETE student (ADMIN)
const deleteStudent = async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.json({
        success: false,
        message: "Student not found",
      });
    }

    res.json({
      success: true,
      message: "Student deleted",
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
