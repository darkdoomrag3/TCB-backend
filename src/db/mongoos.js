const mongoos = require('mongoose');




mongoos.connect('mongodb://127.0.0.1:27017/tcb-api', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const Borbering = mongoos.model('Bolbrig', {
    bolbringName: {
        type: String,
        trim: true,
        require: true
    },

    description: {
        type: String,
        trim: true,
        require: true
    },
    complited: {
        type: Boolean,
        default: false
    },
    bolberingModel: {
        type: Number,
        require: true
    }
})

