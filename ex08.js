module.exports = function intersection(...arrays){

    let newArr =[]
    const first_tab = arrays[0]
        for (const elt of first_tab){
            present = true
            for (i = 1; i < arrays.length; i++ ){
                if(!arrays[i].includes(elt)){
                    present=false
                }
            }
            if(present){
                newArr.push(elt)
            }
        }
        return newArr
    }