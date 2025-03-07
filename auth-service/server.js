const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/auth-service', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});