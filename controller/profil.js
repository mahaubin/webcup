const Profil = require("../model/profil")

const auth =require("../midlewear/auth")

exports.createProfil =(req,res,next) =>{

    const profil= new Profil({
   ...req.body
    })
    profil.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getProfil =(req, res, next) => {
    Profil.find()
    .then(profils => res.status(200).json(profils))
    .catch(error => res.status(400).json({ error }));
  };

//   exports.modifyProfil = (req, res, next) => {
//     Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//       .then(() => res.status(200).json({ message: 'Objet modifié !'}))
//       .catch(error => res.status(400).json({ error }));
//   };


