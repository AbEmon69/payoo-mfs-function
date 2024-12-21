document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = getInputFieldById('input-add-money');
    const pinNumber = getInputFieldById('input-pin-number');
    // console.log('add money value',addMoney,pinNumber)
   if(isNaN(addMoney)){
    alert('failed to add money')
    return;
   }
    // wrong way to check pin number . do not try it serious website
    if(pinNumber === 123456){
        const balanceNumber = getTextInputValueById('account-balance');
   

        const newBalance = balanceNumber + addMoney;

        document.getElementById('account-balance').innerText =newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added : ${addMoney
        } Tk . balance ${newBalance}`;
        console.log(p);

        // should be a common function
        document.getElementById('transaction-container').appendChild(p)
    }
    else{
        alert('failed to add money')
    }
})