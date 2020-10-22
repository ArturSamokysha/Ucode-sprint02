function solver(a, b, c, d, e){
    let x = a * a - 5 * b * c + d / 3 + e;
    if (arguments.length != 5) {
       return alert("Wrong input");
    }
    if(typeof a === "string"){
       return alert("Wrong input");
    }

    if(typeof b === "string"){
        return alert("Wrong input");
     }

     if(typeof c === "string"){
        return alert("Wrong input");
     }

     if(typeof d === "string"){
        return alert("Wrong input");
     }

     if(typeof e === "string"){
        return alert("Wrong input");
     }
    
    return x.toFixed(3);
}
alert(solver(40, -9, 0.5, 7, 100))    
alert(solver(40, "yyyy", 0.5, 7, 100))
alert(solver(40, -9, 0.5, 7))

