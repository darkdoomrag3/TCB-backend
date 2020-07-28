const express = require('');
require('./db/mongoos');
const User = require('./models/user');

const app = express()

const port = process.env.Port || 3000

app.use(express.json())


app.post('/users', (req, res) => {
    const user = new User(req.body)

    app.save().then(() => {
        res.send(user)

    }).cath((e) => {
        res.status(400).send(e)
    })
})



app.listen(port, () => {
    console.log('server is up on port' + port)
})




//// 8 9