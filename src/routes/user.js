const express = require('express');
const {login, signup, addPoin, userInfo, allUser} = require('../controller/user')

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/add/poin', addPoin);
router.get('/info/:userId', userInfo);
router.get('/all', allUser);

module.exports = router;