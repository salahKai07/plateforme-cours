const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    nom: String,
    email: String,
    cours: [String]
});

module.exports = mongoose.model('Student', studentSchema);