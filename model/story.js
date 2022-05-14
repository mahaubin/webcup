const mongoose = require('mongoose');

const storySchema = mongoose.Schema({

Titre:{ type: String, required: false },
Description:{ type: String, required: false },
media:[
    {nomMedia:{ type: String, required: false },}
],
dateHistory:{ type: Date, required: false },
datePublicatio: { type: Date, required: false },
affichage : { type: Boolean, required: false },

});

module.exports = mongoose.model('Story', storySchema);