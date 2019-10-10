module.exports = function map(list, iterateCb){
    let arr = []

    for(let item of Object.entries(list)){
        
        const [key, value] = item
        const res = iterateCb(value)
        arr.push(res)
    }   

    return arr
}