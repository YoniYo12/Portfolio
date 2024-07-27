// const arr = [1,2,1,3,3,4,5,6,7,8]

// function twosums(arr,target){
//     const result = [];
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j] === target){
//                 result.push([i,j])
//             }
//         }
//     }
//     return result
// }

const arr = [1, 2, 1, 3, 3, 4, 5, 6, 7, 8];

function twosums(arr, target) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i, j);
            }
        }
    }
    return result;
}



console.log(twosums(arr,9));