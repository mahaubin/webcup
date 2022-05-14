const express = require('express');
const router = express.Router();

const profilCtrl = require('../controller/profil');
const auth = require("../midlewear/auth")

router.post('/profil',profilCtrl.createProfil);
router.get('/profil',profilCtrl.getProfil);

module.exports = router;