const mongoose = require('mongoose');

const profilSchema = mongoose.Schema({
    userId: { type: String, required: true },
    profilPicture: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    wifeName: { type: String, required: true},
    brotherSister: [
        {
            lastName:{ type: String, required: true},
            firstName:{ type: String, required: true},
        }
    ],
    children: [
        {
            lastName:{ type: String, required: true},
            firstName:{ type: String, required: true},
        }
    ],
});

module.exports = mongoose.model('Profil', profilSchema);