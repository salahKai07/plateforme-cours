const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: String,
    bio: String,
    cours: [String]
});

module.exports = mongoose.model('Teacher', teacherSchema);