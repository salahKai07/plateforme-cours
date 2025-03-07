const express = require('express');
const Student = require('../models/Student');
const verifyToken = require('../middleware/verifyToken'); 
const router = express.Router();

router.use(verifyToken);

router.get('/all', async (req, res) => {
    const students = await Student.find();
    res.status(200).json(students);
});

router.post('/add', async (req, res) => {
    const { nom, email } = req.body;
    const student = new Student({ nom, email, cours: [] });
    await student.save();
    res.status(201).send('Student added');
});

router.post('/enroll/:etudiant_id/:cours_id', async (req, res) => {
    const { etudiant_id, cours_id } = req.params;
    const student = await Student.findById(etudiant_id);
    student.cours.push(cours_id);
    await student.save();
    res.status(200).send('Student enrolled in course');
});

router.get('/enrolledCourses/:etudiant_id', async (req, res) => {
    const { etudiant_id } = req.params;
    const student = await Student.findById(etudiant_id);
    res.status(200).json(student.cours);
});

module.exports = router;