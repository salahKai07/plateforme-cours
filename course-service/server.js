const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/course-service', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/course', courseRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Course service running on port ${PORT}`);
});