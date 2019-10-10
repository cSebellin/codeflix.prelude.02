moduele.exports function first(arr, n=1){
    return n == 1 ? arr(0) : arr.splice(0, n)
}

console.log(first([20, 51, 2, 13]))
console.log(first([20, 51, 2, 13]))