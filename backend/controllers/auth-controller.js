const User = require('../models/user-model')
const bcrypt = require('bcryptjs')

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const userExist = await User.findOne({ email })
        if (!userExist) return res.status(400).json({ msg: 'Invalid Credentials' })
        const user = await bcrypt.compare(password, userExist.password)
        if(user) {
            return res.status(200).json({ 
                msg: 'Login Successful', 
                token: await userExist.generateToken(), 
                userId: userExist._id.toString() 
            })
        }
        else {
            return res.status(500).json({msg: 'Invalid email or password'})
        }
    } catch (error) {
        res.status(400).json({ msg: 'internal server error' })
    }
}

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body
        const userExists = await User.findOne({ email })
        if (userExists) return res.status(400).json({ msg: 'email already exists' })
        const userCreated = await User.create({ username, email, phone, password })
        return res.status(200).json({ msg: userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString() })
    } catch (error) {
        res.status(400).json({ msg: 'internal server error' })
    }
}


module.exports = { login, register }