let team = prompt("Team: ", "");
let uni = prompt("Universe: ", "");
let race = prompt("Race: ", "");
let ec = prompt("Eye color: ", "");
let hc = prompt("Hair color: ", "");

if ((team === "Avengers" || "S.H.I.E.L.D.") && (uni === "Marvel") && (race === "human") && (ec === "green") && (hc === "light brown" || "green")){
    alert("This is black Widow!");
}  else if ((team === "Justice League of America" || "Teen Titans") && (uni === "DC Comics") && (race === "human" || "kryptonian") && (ec === "blue") && (hc === "black")) {
    alert("This is Superman or Robin!")
} else {
    alert("Wrong input!")
}
