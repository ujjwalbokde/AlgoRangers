const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user')
const router = express.Router();
const auth = require("../middleware/auth");
// @route    POST /register
// @desc     Register user
router.post('/register', async (req, res) => {
  const { name, email, mobile, password, gender, role } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      mobile,
      password,
      gender,
      role,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    POST /login
// @desc     Authenticate user & get token

// Login route (simplified)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate the token
    const payload = { user: { id: user.id } };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return token in response
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get("/profile", auth, async (req, res) => {
    try {
        // Find the user by ID (excluding the password field)
        const user = await User.findById(req.user.id).select("-password");
        console.log(user);
        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with the user object
        res.json(user);
    } catch (error) {
        // Log the error and respond with a 500 status
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
});

  
module.exports = router;
