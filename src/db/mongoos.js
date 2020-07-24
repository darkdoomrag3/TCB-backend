const mongoos = require('mongoose');

mongoos.connect('mongodb://127.0.0.1:27017/tcb-api', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const User = mongoos.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    },
    description: {
        type: String
    },
    date: {
        type: Date
    }
})


const saveData = new User({
    name: 'Emad',
    age: 28,
    description: 'this is test bolbering',
    date: 2021
})

saveData.save().then((saveData) => {
    console.log(saveData)

}).catch((error) => {
    console.log('Error!!!')
})