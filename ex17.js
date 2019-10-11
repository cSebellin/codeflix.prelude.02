module.exports = function has(obj, ...options){
    const[firstOpts] = options
    const newObj = {}
    const callback = firstOpts
        //with callback
        for(const item of Object.entries[obj]){
            if (callback(value,key) === true){
                newObj[key] = obj[key]
                
            }
        }
    return newObj
}