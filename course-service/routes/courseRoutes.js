const express = require('express');
const Course = require('../models/Course');
const verifyToken = require('../middleware/verifyToken'); 
const router = express.Router();

router.use(verifyToken);

router.get('/all', async (req, res) => {
    const courses = await Course.find();
    res.status(200).json(courses);
});

router.post('/add', async (req, res) => {
    const { titre, professeur_id, description, prix } = req.body;
    const course = new Course({ titre, professeur_id, description, prix });
    await course.save();
    res.status(201).send('Course added');
});

router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { titre, description, prix } = req.body;
    await Course.findByIdAndUpdate(id, { titre, description, prix });
    res.status(200).send('Course updated');
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.status(200).send('Course deleted');
});

router.get('/search', async (req, res) => {
    const { term } = req.query;
    const courses = await Course.find({ titre: { $regex: term, $options: 'i' } });
    res.status(200).json(courses);
});

module.exports = router;