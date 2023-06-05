// console.log("간단 실행 테스트")

function print() {
    console.log("hi 리액트")
}
// function increase(number, callback) {
//     setTimeout(() => {
//         const result = number + 1
//         if(callback) {
//             callback(result)
//         }
//     }, 2000)
// }
// // setTimeout(print, 3000);
// increase(10,result => {
//     console.log(result)
// })
print()
console.log('대기중...')

// console.log("콜백 지옥 시작")
// increase(0, result => {
//     console.log(result)
//     increase(result, result => {
//         console.log(result)
//         increase(result, result => {
//             console.log(result)
//             increase(result, result => {
//                 console.log(result)
//             })
//         })
//     })
// })

function increase2(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result2 = number + 10;
            if(result2 > 50) {
                const e = new Error("테스트 에러")
                return reject(e)
            } 
            resolve(result2)
        }, 2000)
    })
    return promise
}
// increase2(10).then(number => {
//     console.log(number)
//     return increase2(number)
// }).then(number => {
//     console.log(number)
//     return increase2(number)
// }).then(number => {
//     console.log(number)
//     return increase2(number)
// }).then(number => {
//     console.log(number)
//     return increase2(number)
// }).catch(e => {
//     console.log(e)
// })

async function runTest() {
    try {
         let result = await increase2(10);
         console.log(result)

         result = await increase2(result);
         console.log(result)

         result = await increase2(result);
         console.log(result)

         result = await increase2(result);
         console.log(result)

         result = await increase2(result);
         console.log(result)

         result = await increase2(result);
         console.log(result)
    } catch(e) {
        console.log(e)
    }
}
runTest()
