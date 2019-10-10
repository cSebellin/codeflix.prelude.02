module.exports = function values(obj){
    //return Object.keys(obj)
    let arr = []
    for (const item of Object.entries(obj)){
        const [key,value] = item
        arr.push(value)

    } 
    return arr
}