// Code your solutions in this file
function writeCards(names,message){
    let i = 0;
    let namesArray = [];
    while(i != names.length){
    namesArray.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    i++;
    }
    return namesArray;
}

function countDown (someNumber) {
    while(someNumber > 0){
        console.log(someNumber);
        someNumber--;
    }
    console.log(someNumber);
}