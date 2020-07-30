

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)

    })

}


const doWork = async () => {
    const sum = await add(1, 99)
    return sum
}


doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})



add(2, 5).then((sum) => {
    console.log(sum)
    return (sum, 10)
}).then((sum2) => {
    console.log(sum2)
})



////// 11 18