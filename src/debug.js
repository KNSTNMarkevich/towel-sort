

matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
]

let result = [];

for (let i = 0; i< matrix.length; i++){
    if (i % 2 === 0)
    result = result.concat(matrix[i])
    else if (i% 2 == 1)
    result = result.concat(matrix[i].sort().reverse())
    return matrix

}

console.log(result)