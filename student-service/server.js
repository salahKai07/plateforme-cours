const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/student-service', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/student', studentRoutes);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Student service running on port ${PORT}`);
});