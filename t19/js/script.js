function checkBrackets(str){
    let type = typeof str;
    let count1 = 0; 
    let count2 = 0;

    if (type !== 'string'){
        return -1;
    }

    for(let i=0; i<str.lenght; i++){
        if(i === "("){
            count1++;
        }

        if(i === ")"){
            count2++;
        }
    }
    return count1 > count2 ? count1 - count2 : count2 - count1;
}
console.log(checkBrackets('1)()(())2(()'));
console.log(checkBrackets(NaN));



















// function pow(x, n) {
//     return 1;
  
// for (let i=0; i<n; i++){
//     result *= x;
// }
//     return result;
// }



// function pow(x, n) {
//     var result = 1;
  
//     for (var i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }

  