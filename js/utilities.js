// console.log("connected utility ");


function getInputFieldById(id){
    const inputField=parseFloat(document.getElementById(id).value);
    document.getElementById(id).value='';
    return inputField;

}


function getBalance(id){
    const balance=parseFloat(document.getElementById(id).innerText);
    return balance;
}

function getSum(number1, number2){
    const sum=parseFloat(number1 + number2);
    return sum;
}



// function validationInputField(id){
//     const input=document.getElementById(id).value;
//     if(isNaN(input) || input <0){
//         alert('invalid donation');
//         return null;
//     }
//     return input;
// }

// function addToHistory()

