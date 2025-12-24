// const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");

// // generate JWT
// const generateToken = (user) => {
//   return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });
// };

// // SIGNUP
// const signup = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     if (!name || !email || !password) {
//       return res.json({
//         success: false,
//         message: "Missing required fields",
//       });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.json({
//         success: false,
//         message: "User already exists",
//       });
//     }

//     const user = new User({
//       name,
//       email,
//       password,
//       role: role || "student", // safe default
//     });

//     await user.save();

//     res.json({
//       success: true,
//       message: "User registered successfully",
//     });
//   } catch (error) {
//     res.json({
//       success: false,
//       error: error.message,
//     });
//   }
// };

// // LOGIN
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.json({
//         success: false,
//         message: "Missing credentials",
//       });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const token = generateToken(user);

//     res.json({
//       success: true,
//       token,
//       role: user.role,
//     });
//   } catch (error) {
//     res.json({
//       success: false,
//       error: error.message,
//     });
//   }
// };

// module.exports = { signup, login };

const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// 🔐 Generate JWT
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// ======================
// ✅ SIGNUP
// ======================
const signup = async (req, res) => {
  try {
    const { name, age, city, email, password, role } = req.body;

    // 🔴 Validate input
    if (!name || !age || !city || !email || !password) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    // 🔍 Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    // ✅ Create user
    const user = new User({
      name,
      age,
      city,
      email,
      password,
      role: role || "student",
    });

    await user.save();

    res.json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// ✅ LOGIN
// ======================
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Missing credentials",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user);

    res.json({
      success: true,
      token,
      role: user.role,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { signup, login };
