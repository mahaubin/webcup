const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
    titre:{ type: String, required: true},
    description:{ type: String, required: true},
    media:{nomMedia:{ type: String, required: true}},
    dateHistory:{ type: Date, required: false},
    datePublication: { type: Date, required:false},
    affichage: { type: Boolean, required: true },
});

module.exports = mongoose.model('Story', storySchema);