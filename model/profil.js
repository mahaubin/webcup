const mongoose = require('mongoose');

const profilSchema = mongoose.Schema({
    profilPicture: { type: String, required: false },
    fatherName: { type: String, required: false },
    motherName: { type: String, required: false },
    wifeName: { type: String, required: false},
    brotherSister: [
        {
            lastName:{ type: String, required: false},
            firstName:{ type: String, required: false},
        }
    ],
    children: [
        {
            lastName:{ type: String, required: false},
            firstName:{ type: String, required: false},
        }
    ],
});

module.exports = mongoose.model('Profil', profilSchema);