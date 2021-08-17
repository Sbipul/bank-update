function getValue(inputValue){
    const inputAmountText = document.getElementById(inputValue).value;
    const inputAmount = parseFloat(inputAmountText);
    document.getElementById(inputValue).value = '';
    return inputAmount;
}
function getCurrentBalance(){
    const balance = document.getElementById('balance');
    const totalBalanceText = balance.innerText;
    const totalBalance = parseFloat(totalBalanceText);
    return totalBalance;
}

function updateTotalField(inputId,inputAmount){
    const currentAmountCatch = document.getElementById(inputId);
    const currentAmountText = currentAmountCatch.innerText;
    const currentAmount = parseFloat(currentAmountText);
    currentAmountCatch.innerText = currentAmount + inputAmount;
}

function updateBalance(isTrue,inputAmount){
    const balance = document.getElementById('balance');
    // const totalBalanceText = balance.innerText;
    // const totalBalance = parseFloat(totalBalanceText);
    const totalBalance = getCurrentBalance();
    if (isTrue == true) {
        balance.innerText = totalBalance + inputAmount;
    }
    else {
        balance.innerText = totalBalance - inputAmount;
    }
}
// event haldle for deposit 
document.getElementById('deposit').addEventListener('click',function(){
    const inputAmount = getValue('deposit-amount');
    if (inputAmount > 0) {
        updateTotalField('deposit-last',inputAmount);
        updateBalance(true,inputAmount);
    }

})



// event handle for withdraw 

document.getElementById('withdraw').addEventListener('click',function(){
    const inputWithdrawAmount = getValue('withdraw-amount');
    const currentAmount = getCurrentBalance();
    if (inputWithdrawAmount > 0 && currentAmount > inputWithdrawAmount) {
        updateTotalField('withdrawLast',inputWithdrawAmount);
        updateBalance(false,inputWithdrawAmount);
    }
    if (inputWithdrawAmount > currentAmount) {
        alert('insufficient balance');
    }

})