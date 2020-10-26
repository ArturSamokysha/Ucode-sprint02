// 1*0.1 = 0.1
// 1*02 = 0.2 + 0.1 = 0.3
// 1*0.78 = 0.78 + 0.3 = 1.08


let sum = total(1, 0.1);
    sum = total(1, 0.2, sum);
    sum = total(1, 0.78, sum);
    


function total(addCount = 1, addPrice = 0.1, currentTotal = 0){
    
    currentTotal += addCount * addPrice;
    return currentTotal;
}
console.log(sum);


// let x = total(1, 0.1);
//     y = total(1, 0.2, x);
//     z = total(1, 0.78, y);

// function total(count = 1, price = 0.1, total = 0){
//     total += count * price;
//     return total;
// }
// console.log(z)

