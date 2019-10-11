module.exports = function intersection(...arrays){

    let newArr =[]
    const [first_tab,...rest] = arrays // ou arrays.shift()
        for (const elt of first_tab){
            present = true
            for (const currentArr of rest ){
                if(currentArr.includes(elt)){
                    present = false
                }
            }
            if(present){
                newArr.push(elt)
            }
        }
        return newArr
    }