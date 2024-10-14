

// Given an array of number , find a matching pair that is equal to a  given sum and return true
// For example:
const array = [1,2,3,4,5]

const sum = 10
// should return true i.e 3 + 4 = 7

// function findSumPair(arr, sum) {
//     for (let i = 0; i<arr.length; i++) {
//         for (let j = i+1; j<arr.length; j++) {
//             if (arr[i] + arr[j] === sum){
//                 return true
//             }
//         } 
//     }
//     return false
// }

// console.log(findSumPair(array, sum))

function findSumPair2(arr, sum) {
    const mySet = new set()
    mySet.add(2)
    for (let i=0; i<arr.length; i++){
        if (mySet.has(arr[i])) {
            return true
        }
        // mySet.add(sum - arr[i])
    }


}


console.log(findSumPair2(array, sum))