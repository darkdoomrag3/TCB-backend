require('../db/mongoose');
const User = require('../models/user')



User.findByIdAndUpdate('5f21205dd2d8c91c80a6da2a', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })

}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

