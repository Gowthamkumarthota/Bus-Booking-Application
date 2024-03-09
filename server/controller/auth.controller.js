import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';  // Import bcryptjs module

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // Implement user registration logic, save to database, etc.
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    // Handle errors, send appropriate response
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, 'User not found!'));
    }

    // Compare the provided plain text password with the password stored in the database
    if (password !== validUser.password) {
      return next(errorHandler(401, 'Wrong credentials!'));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};