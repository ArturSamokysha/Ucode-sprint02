let str1 = `You're catnip to a girl like me. Handsome, dazed, and to die for...\n`;
let str2 = `Batman: "I tried to save you."`;
let str3 = `Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful."`;





alert(`Just string: ` + str1 + `Lenght: ` + str1.length + `\n`
 + `Character number 2 is: ` + str1.charAt(2) + `\n` 
 + `To uppercase: ` + str1.toUpperCase() + `\n` 
 + `Concatenation in a phrase: ` + str1.concat(`- Catwoman`) + `\n` 
 + `[Batman Returns] ` + str2 + `\n` 
 + str3.replace(/catwoman/ig, ' '));

