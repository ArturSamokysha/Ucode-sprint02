const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];

arr.sort(function(a,b){
    return a % 2 - b % 2 || b % 2 - a % 2 || a - b;
    
})
console.log(arr);


// var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// n.sort(function(a, b) {
//   return a % 2 - b % 2 || b % 2 - a % 2;
// });
// console.log(n);