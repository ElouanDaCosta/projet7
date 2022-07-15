const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');

router.post ('/create', postCtrl.create);

module.exports = router;