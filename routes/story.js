const express = require('express');
const router = express.Router();

const storyCtrl = require('../controller/story');
// const auth = require("../midlewear/auth");

// router.post('/story',auth,storyCtrl.createStory);
// router.get("/story",auth,storyCtrl.getStory);

router.post("/story",storyCtrl.createStory);
router.get("/story",storyCtrl.getStory);

module.exports = router;