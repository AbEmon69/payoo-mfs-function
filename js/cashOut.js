document.getElementById('btn-cash-out')
.addEventListener('click',function(event){
    event.preventDefault();
    
    const cashOut = getInputFieldById('input-cash-out-money');

    const pinNumber =getInputFieldById('input-cash-out');
  

    if(pinNumber===12345){
         const balance = getTextInputValueById('account-balance');
         

         if(cashOut > balance){
            alert('you do not have enough money')
            return;
         }
         const newBalance = balance-cashOut;
         document.getElementById('account-balance').innerText = newBalance

         //add to transaction

         const div = document.createElement('div')
         div.classList.add('bg-yellow-300')
         div.innerHTML =`
          <h5> cash out </h5>
          <p>${cashOut} withdraw .newBalance ${newBalance} 
         
         `
         document.getElementById('transaction-container').appendChild(div)
    }
    else{
        alert('no money for you ......DGM')
    }
})