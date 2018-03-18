let arr: Array<string> = new Array()
arr.push('Android')
arr.push('iOS')
arr.push('windows')
arr.push('java')
arr.push('php')

let nrr: object[][] = [
    [{}, {}, {}],
    [{}, {}, {}]
]

let arrOth : Array<Array<number>> = new Array()

arrOth.forEach(el => {
    el.forEach( elIn => console.log(elIn))
})

for(let i = 0; i < nrr.length;i++) {
    for(let j = 0; j < nrr[i].length ; j++) {

    }
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr.forEach((el, ind) => console.log(ind, el))