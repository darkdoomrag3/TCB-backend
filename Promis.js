const doWorkPromis = new Promise((resolve, reject) => {

    setTimeout(() => {
        //reject('something wrong')
        resolve([1, 4, 30])

    }, 2000)

})

doWorkPromis.then((resolve) => {
    console.log('Success!', resolve)

}).catch((error) => {
    console.log('Error', error)
})



////// 11 3