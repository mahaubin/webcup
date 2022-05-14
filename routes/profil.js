const express = require('express');
const router = express.Router();

const profilCtrl = require('../controller/profil');

const auth = require('../midlewear/auth');

router.post('/profil',auth,profilCtrl.createProfil);

module.exports = router;