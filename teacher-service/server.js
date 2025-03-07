const express = require('express');
const mongoose = require('mongoose');
const teacherRoutes = require('./routes/teacherRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/teacher-service', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/teacher', teacherRoutes);

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Teacher service running on port ${PORT}`);
});