// add deposite event handeler
document.getElementById('deposite-button').addEventListener('click', function () {
    // console.log('deposite button clicked')
    // 1. get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newdepositeAmountText = depositeInput.value;
    // console.log(newdepositeAmountText);
    const newdepositeAmount = parseFloat(newdepositeAmountText)
    // console.log(newdepositeAmount);



    // 2.update deposite total
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositetext = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositetext);
    const newDepositeTotal = previousDepositeAmount + newdepositeAmount;
    depositeTotal.innerText = newDepositeTotal;

    // 3.update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(newdepositeAmount) + parseFloat(previousBalanceAmount);
    balanceTotal.innerText = newBalanceTotal;


    // 4.clear the deposite input field
    depositeInput.value = ' ';
})

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdraw button clicked')
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //clear withdraw input
    withdrawInput.value = ' ';
    // ekhane ekta space dite hobe

    //update balance
    const balanceAfterWithdraw = document.getElementById('balance-total');
    const previousBalanceText = balanceAfterWithdraw.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceAfterWithdraw.innerText = newBalanceTotal;
})