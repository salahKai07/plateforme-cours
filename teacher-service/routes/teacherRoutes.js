const express = require('express');
const Teacher = require('../models/Teacher');
const verifyToken = require('../middleware/verifyToken'); 
const router = express.Router();

router.use(verifyToken);

router.get('/all', async (req, res) => {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
});

router.post('/add', async (req, res) => {
    const { name, bio } = req.body;
    const teacher = new Teacher({ name, bio, cours: [] });
    await teacher.save();
    res.status(201).send('Teacher added');
});

router.post('/assign/:professeur_id/:cours_id', async (req, res) => {
    const { professeur_id, cours_id } = req.params;
    const teacher = await Teacher.findById(professeur_id);
    teacher.cours.push(cours_id);
    await teacher.save();
    res.status(200).send('Course assigned to teacher');
});

router.get('/enrolledStudents/:cours_id', async (req, res) => {
    const { cours_id } = req.params;
    const students = await Student.find({ cours: cours_id });
    res.status(200).json(students);
});

module.exports = router;