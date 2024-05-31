const express = require('express')
const router = express.Router()
const { login, register } = require('../controllers/auth-controller')
const validate = require('../middlewares/validate-middleware')
const { signupSchema, signinSchema } = require('../validators/auth-validator')

router.route('/login').post(validate(signinSchema), login)
router.route('/register').post(validate(signupSchema), register)

module.exports = router

