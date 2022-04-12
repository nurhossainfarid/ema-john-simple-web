function inputField(amount) {
    const fieldInput = document.getElementById(amount);
    const fieldAmount = fieldInput.value;
    const stringConvertFloat = parseFloat(fieldAmount);
    fieldInput.value = '';
    return stringConvertFloat;
}

function totalFieldText(text, fieldInput) {
    const previousFieldAmount = document.getElementById(text);
    const totalPreviousAmount = previousFieldAmount.innerText;
    const totalAmountConvertToFloat = parseFloat(totalPreviousAmount);
    // current deposit value
    const currentTotalAmount = fieldInput + totalAmountConvertToFloat;
    previousFieldAmount.innerText = currentTotalAmount;
    return totalAmountConvertToFloat;
}

function getCurrentBalance() {
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(totalBalance.innerText);  
    return previousTotalBalance;
}

function totalBalanceCalculation(fieldInput,isAdd) {
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalance = getCurrentBalance();
    // current total balance
    if (isAdd == true) {
        const currentTotalAmount = fieldInput + previousTotalBalance;
        totalBalance.innerText = currentTotalAmount;
    } else {
        const currentTotalAmount = previousTotalBalance - fieldInput ;
        totalBalance.innerText = currentTotalAmount;
    }
}
// Deposit
document.getElementById('deposit-button').addEventListener('click', function (depositEvent) {
    // deposit input
    const depositAmount = inputField('deposit-input');
    if (depositAmount >= 0) {
        // total deposit
        const previousDeposit = totalFieldText('total-deposit', depositAmount);
        // total balance 
        const totalBalance = totalBalanceCalculation(depositAmount,true)
    }

})

// Withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // withdraw input
    const withdrawAmount = inputField('withdraw-input');
    const previousTotalBalance = getCurrentBalance();
    if (withdrawAmount >= 0 && withdrawAmount < previousTotalBalance) {
        // total withdraw
        const previousWithdraw = totalFieldText('total-withdraw', withdrawAmount);
        // total balance 
        const totalBalance = totalBalanceCalculation(withdrawAmount,false)
    }
    else if (withdrawAmount > previousTotalBalance) {
        const requirementMessage = document.getElementById('withdraw-requirement').innerText = "You can not withdraw more than what is your account";
        document.getElementById('withdraw-button').addEventListener('click', requirementMessage)
    }
})