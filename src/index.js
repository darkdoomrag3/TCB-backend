const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

const bcrypt = require('bcrypt')

const myfunction = async () => {
    const password = 'Red1234!'
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red1234!', hashedPassword)
    console.log(isMatch)

}

myfunction()



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


/// 12 4