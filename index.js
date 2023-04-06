 function writeCards(array , event){
    const message = []
    for(let i = 0 ; i < array.length; i++){
        message.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);   
    }
    return message;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));
function countDown(numder){
    while(numder >= 0){
        console.log(numder);
        numder--;
    }
}
countDown(10)