// console.log('js connected');
// card-1
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
    if(isNaN(inputField1) || inputField1<=0){
      alert ('Invalid Input Donation');
      return;
    }
    // if(isNaN(donationField1)|| donationField1<=0){
    //   alert ('Invalid Input donation');
    //   return;
    // }
    const donationField1=getBalance('donation-1');

    
    const balance=getSum(inputField1, donationField1);
    document.getElementById('donation-1').innerText=balance.toFixed(2);
    const mainBalance=getBalance('balance-main');
    const newBalance=mainBalance - inputField1;
    document.getElementById('balance-main').innerText=newBalance.toFixed(2);

    document.getElementById('review-container').classList.remove('hidden');


    const now=new Date();
    const historySection1=document.createElement('div');
    historySection1.className="bg-white p-3 rounded-md border-gray-500";
    historySection1.innerHTML=`
    
    <p class='text-base'>
    Date:${now.toLocaleDateString('en-us', { weekday: 'long' })}
    ${now.toLocaleString('en-us', { month: 'long' })}
     
    ${now.toLocaleTimeString()} 
   ( ${Intl.DateTimeFormat().resolvedOptions().timeZone})
  </p>
   

    <p> ${inputField1} Taka is Donated for ${document.getElementById('address-1').innerText} 
    <br>
    <br>
    <hr>
    <br>
    <br>
    <hr>
    
    `

    const historyContainer=document.getElementById('history-container');
    historyContainer.appendChild(historySection1);

});
// card-2
document.getElementById('donate-button2').addEventListener('click', function(){
 
    const inputField1=getInputFieldById('input-value-2');
  
    if(isNaN(inputField1) || inputField1<=0){
      alert ('Invalid Input Donation');
      return;
    }

    const donationField1=getBalance('donation-2');
    const balance=getSum(inputField1, donationField1);
    document.getElementById('donation-2').innerText=balance.toFixed(2);
    const mainBalance=getBalance('balance-main');
    const newBalance=mainBalance - inputField1;
    document.getElementById('balance-main').innerText=newBalance.toFixed(2);

    document.getElementById('review-container-2').classList.remove('hidden');

    const now=new Date();
    const historySection1=document.createElement('div');
    historySection1.className="bg-white p-3 rounded-md border-gray-500";
    historySection1.innerHTML=`
    
    <p class='text-base'>
    Date:${now.toLocaleDateString('en-us', { weekday: 'long' })}
    ${now.toLocaleString('en-us', { month: 'long' })}
     
    ${now.toLocaleTimeString()} 
   ( ${Intl.DateTimeFormat().resolvedOptions().timeZone})
  </p>
   

    <p> ${inputField1} Taka is Donated for  ${document.getElementById('address-2').innerText} 
    <br>
    <br>
    <hr>
    <br>
    <br>
    <hr>
    
    `

    const historyContainer=document.getElementById('history-container');
    historyContainer.appendChild(historySection1);
});

// card-3
document.getElementById('donate-button3').addEventListener('click', function(){
    const inputField1=getInputFieldById('input-value-3');

    if(isNaN(inputField1) || inputField1<=0){
      alert ('Invalid Input Donation');
      return;
    }
    const donationField1=getBalance('donation-3');
    const balance=getSum(inputField1, donationField1);
    document.getElementById('donation-3').innerText=balance.toFixed(2);
    const mainBalance=getBalance('balance-main');
    const newBalance=mainBalance - inputField1;
    document.getElementById('balance-main').innerText=newBalance.toFixed(2);

    document.getElementById('review-container-3').classList.remove('hidden');

    const now=new Date();
    const historySection1=document.createElement('div');
    historySection1.className="bg-white p-3 rounded-md border-gray-500";
    historySection1.innerHTML=`
    
    <p class='text-base'>
    Date:${now.toLocaleDateString('en-us', { weekday: 'long' })}
    ${now.toLocaleString('en-us', { month: 'long' })}
     
    ${now.toLocaleTimeString()} 
   ( ${Intl.DateTimeFormat().resolvedOptions().timeZone})
  </p>
   

    <p> ${inputField1} Taka is Donated for ${document.getElementById('address-3').innerText} 
    <br>
    <br>
    <hr>
    <br>
    <br>
    <hr>
    
    `

    const historyContainer=document.getElementById('history-container');
    historyContainer.appendChild(historySection1);
});

// donation and history tab

const historyTab=document.getElementById('history-tab');
const donationTab=document.getElementById('donation-tab');

historyTab.addEventListener('click', function(){
historyTab.classList.add('bg-primary-color');
donationTab.classList.remove('bg-primary-color');
const cardSection=document.getElementById('card-section');
cardSection.classList.add('hidden');
document.getElementById('history-container').classList.remove('hidden');


});

donationTab.addEventListener('click', function(){
donationTab.classList.add('bg-primary-color');
historyTab.classList.remove('bg-primary-color');
const cardSection=document.getElementById('card-section');
cardSection.classList.remove('hidden');
});


document.getElementById('blog').addEventListener('click', function(){
window.location.href='/blog.html';
});

// card-1

document.getElementById('close-btn').addEventListener('click', function(){
  document.getElementById('review-container').classList.add('hidden');
});
// card-2

document.getElementById('close-btn-2').addEventListener('click', function(){
  document.getElementById('review-container-2').classList.add('hidden');
});
// card-3

document.getElementById('close-btn-3').addEventListener('click', function(){
  document.getElementById('review-container-3').classList.add('hidden');
});