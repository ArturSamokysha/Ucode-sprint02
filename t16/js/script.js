let heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];

function firstElements(heroes, n){
    if(n < 0){
        return [];
    }
    else {
        return heroes.slice(0, n);
    }
}

console.log(firstElements(heroes, 2));



