const doWorkCallBack = (callack) => {
    setTimeout(() => {
        callack(undefined, [1, 4, 18])
    }, 2000)


}

doWorkCallBack((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})
