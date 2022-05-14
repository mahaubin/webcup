const Profil = require("../model/profil")

const auth = require('../midlewear/auth');

exports.createProfil =(req,res,next) =>{
    delete req.body._id;
    const profil= new Profil({
    userId: req.auth.userId,
    profilPicture: req.body.profilPicture,
    fatherName: req.body.fatherName,
    motherName: req.body.motherName,
    wifeName: req.body.wifeName,
    brotherSister: [
        {
            lastName:req.body.brotherSister.lastName,
            firstName:req.body.brotherSister.firstName,
        }
    ],
    children: [
        {
            lastName:req.body.children.lastName,
            firstName:req.body.children.firstName,
        }
    ],
    })

    thing.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};
