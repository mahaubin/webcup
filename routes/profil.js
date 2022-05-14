const express = require('express');
const router = express.Router();

const profilCtrl = require('../controller/profil');
const auth = require("../midlewear/auth")


// controler lorsqu'il y a des authetnifications 
// router.post('/profil',auth,profilCtrl.createProfil);
// router.get('/profil',auth,profilCtrl.getProfil);
//router.put('/profil/:id',auth,profilCtrl.modifyProfil);

router.post('/profil',profilCtrl.createProfil);
router.get('/profil',profilCtrl.getProfil);
// router.put('/profil/:id',profilCtrl.modifyProfil);

module.exports = router;