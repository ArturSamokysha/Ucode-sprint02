let x = prompt ('Take the numbers for the beginning of a range (1 - 100)');
let y = prompt ('Take the numbers for the end of a range (1 - 100)');



for (let i = x; i<=y; i++){
    if(i % 3 == 0 && i % 10 == 0){
        console.log(i + ' is even, a multiple of 3, a multiple of 10');
    }
    else if(i % 2 == 0 && i % 10 == 0){
        console.log(i + ' is even and a multiple of 10');
    }
    else if(i % 2 == 0 && i % 3 == 0){
        console.log(i + ' is even and a multiple of 3');
    }
    else if(i % 3 == 0){
        console.log(i + ' is a multiple of 3')
    }
    
    else if(i % 2 == 0){
        console.log(i + ' is even');
    }
    
   
    
    else{
        console.log(i + ' -')
    }
    
}








// for (let i = 0; i<=10; i++){
//     if(i % 2 == 0){
//         console.log(i + 'even');
//     }
//     else if (i % 2 !=0){
//         console.log(i + 'not even')
//     }
    
// }