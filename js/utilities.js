/**
 * common shared styles
*/
// console.log('utilities reloaded')

// function getInputFieldById(){
//     console.log('will get value by id')
//     const addMoneyInput = document.getElementById('input-add-money').value ;
//     return addMoneyInput
// }



// function getInputFieldById (id){
//     const addMoney = document.getElementById(id).value;
//     return addMoney
// }

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // show the section with the provide parameter
    document.getElementById(id).classList.remove('hidden');
}


