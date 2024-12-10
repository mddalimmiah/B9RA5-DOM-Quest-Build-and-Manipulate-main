// console.log('js connected');

document.getElementById('donate-button').addEventListener('click', function(){
//     console.log('donate button clicked');
//     const inputFiled=parseFloat(document.getElementById('input-value-1').value);
//     // console.log(inputFiled)
  
//    const donationField=parseFloat(document.getElementById('donation-1').innerText);
//    const totalAmount=parseFloat(inputFiled + donationField);
//    document.getElementById('donation-1').innerText=totalAmount;
//    document.getElementById('input-value-1').value='';

//    const mainBalance=parseFloat(document.getElementById('balance-main').innerText);
//    const newBalance= mainBalance - inputFiled;
//    document.getElementById('balance-main').innerText=newBalance;
 
    
    // const balanceMain=document.getElementById('balance-main');
    // console.log('clicked balance')
    
    const inputField1=getInputFieldById('input-value-1');
    const donationField1=getBalance('donation-1');
    const balance=getSum(inputField1, donationField1);
    document.getElementById('donation-1').innerText=balance;
    const mainBalance=getBalance('balance-main');
    const newBalance=mainBalance - inputField1;
    document.getElementById('balance-main').innerText=newBalance;

});

document.getElementById('donate-button2').addEventListener('click', function(){
   
    const inputField1=getInputFieldById('input-value-2');
    const donationField1=getBalance('donation-2');
    const balance=getSum(inputField1, donationField1);
    document.getElementById('donation-2').innerText=balance;
    const mainBalance=getBalance('balance-main');
    const newBalance=mainBalance - inputField1;
    document.getElementById('balance-main').innerText=newBalance;
});
document.getElementById('donate-button3').addEventListener('click', function(){
    const inputField1=getInputFieldById('input-value-3');
    const donationField1=getBalance('donation-3');
    const balance=getSum(inputField1, donationField1);
    document.getElementById('donation-3').innerText=balance;
    const mainBalance=getBalance('balance-main');
    const newBalance=mainBalance - inputField1;
    document.getElementById('balance-main').innerText=newBalance;
});