const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const id = new ObjectID();


// Database Name

const dbName = 'tcb';

// Connect using MongoClient

MongoClient.connect(url, { 'useNewUrlParser': true }, (error, client) => {



    if (error) {
        return console.log('can not connect to the data base')
    }

    const db = client.db(dbName);

    db.collection('users').updateMany({
        completed: false
    }, {
        completed: true
    }
    ).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


});

//// 10 8
