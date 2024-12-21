function getInputFieldById(id){
    const inputField=document.getElementById(id).value ;
    const inputNumber= parseFloat(inputField)
    console.log(id,inputField,inputNumber)

    return inputNumber;
}
  

function getTextInputValueById(id){
    const balance =document.getElementById(id).innerText;
    const balanceInput = parseFloat(balance);
    return balanceInput
}