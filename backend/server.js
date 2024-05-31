const express = require('express')
const app = express()
const connectDb = require('./utils/db')
const authRouter = require('./routers/auth-router')

app.use(express.json())

app.use('/auth', authRouter)

const PORT = 8000
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening at port ${PORT}`);
    })
})
