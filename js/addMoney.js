//  console.log('add money reloaded')

document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    console.log('add money button clicked')


    //  getInputFieldById();
// const addMoneyBalance = getInputFieldById();
// console.log('add money value',addMoneyBalance)
// const addMoney = document.getElementById('input-add-money').value ;
//  const addMoneyNumber = parseFloat(addMoney);
 const addMoney = getInputFieldById('input-add-money');
 const pinNumber = getInputFieldById('input-pin-number');
 console.log('add money value',addMoney,pinNumber)
//  const p = document.createElement('p')
//  p.innerText = `Add : ${balanceNumber} Tk . balance ${newBalance}`;
//  console.log(p)
})
  
