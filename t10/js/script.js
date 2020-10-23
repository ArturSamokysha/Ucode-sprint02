let str1 = prompt('Name');
let str2 = prompt('Gender');
let str3 = prompt('Age');




let lenghtStr1 = str1.length;

let str1RegExp = /^[a-z]{1,20}$/i;
let str2RegExp = /male|female|/gi;
let str3RegExp = /^[0-9]{0,5}\d$/;
let description;

let validateStr1=(str1RegExp.test(str1));
let validateStr2=(str2RegExp.test(str2));
let validateStr3=(str3RegExp.test(str3));


function superHero(){
    if(validateStr1 == false || validateStr2 == false || validateStr3 == false){
       return "Wrong input"} else{
    
         if(str2 == 'male' && str3 < 18){
            description = 'boy';
        } else if(str2 == 'male' && str3 >= 18){
            description = 'man';
        } else if(str2 == 'female' && str3 < 18){
            description = 'girl';
        } else if(str2 == 'female' && str3 >= 18){
            description = 'woman';
        } else if(str2 == '' && str3 < 18){
            description = 'kid';
        } else if(str2 == '' && str3 >= 18){
            description = 'hero';
        };
        return `The superhero name is: ${str1}-${description}`
        } 
    }
alert(superHero());


