const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = 'srak-fbir';

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send('User registered');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

router.get('/profile', async (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
});

module.exports = router;