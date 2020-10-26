

// function line(lenght){
//     let str = "";
//     for(let i = 1; i <= lenght; i++){
//         str += "*"
//     }
//     return str + "\n";
// }

// function triangle(x){
//     let triangle = "";
//     for (t = 1; t <= x; t++){
//         triangle += line(t);
//     }
//     return triangle;
// }

// alert(triangle(6));

let x = 5;
let y = "";
let z = "";

for (let i=0; i<=x; i++){
    z += "* ";
    y += `\n` + z;
};

alert(y);