let x = prompt("Enter the value: ", "");

if ( x == 1 ) {
    alert(x * 2 / 'a')
} else if ( x == 2 ) {
    alert( x - x / 0)
} else if ( x == 3) {
    alert(0 * Infinity)
} else if ( x == 4 ) {
    alert(x * 40000000 == Infinity)
} else{
    alert(`Wrong input!`)
}