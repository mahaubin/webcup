const Story = require("../model/story");

exports.createStory =(req,res,next) =>{
    const story= new Story({
        ...req.body
    })
    story.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getStory = (req,res, next)=>{
    Story.find()
        .then(story => res.status(200).json(story))
        .catch(error => res.status(400).json({ error }));
};