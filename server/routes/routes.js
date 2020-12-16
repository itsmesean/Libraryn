const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController.js');

router.get('/', userController.login, (req,res) => res.status(200).json(res.locals.user));

router.post('/add', userController.signup, (req, res) => res.status(200).json(res.locals.user))

module.exports = router;