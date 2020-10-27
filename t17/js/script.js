let name = prompt('Your name');
let lastName = prompt('Your last name');

let nameRegExp = /^[a-z]{1,20}$/;
let lastNameRegExp = /^[a-z]{1,20}$/;

let validName = nameRegExp.test(name);
let validLastName = lastNameRegExp.test(lastName);

function capiName(){
    if (validName == true && validLastName == true){
        return 'Hello ' + name[0].toUpperCase() + name.substring(1) + ' ' + lastName[0].toUpperCase() + lastName.substring(1) + '!';
    } else if(validName == false || validLastName == false){
        return 'Wrong input!'
    }
}

alert(capiName())
console.log(capiName());



