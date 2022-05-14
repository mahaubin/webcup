const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    pseudo: { type: String, required: true, unique: true },
    dateBirth: { type: Date, required: false },
    mail: { type: String, required: false, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);