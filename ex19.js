module.exports = function sample(obj){
    let arr = Object.entries(obj)
    for (const [key] of Object.entries(obj)){
        arr.push(key)
    }
    return arr[obj[obj.length * Math.random()]] 
}
 