
// Step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // Step:4 [Get input value & convert parseFlote]
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    // Step 5 [Clear Feild]
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
        alert('Please provide a valid number');
        return;
    }


    // Step 3 [Get withdraw total & convert parseFlote & plus(+) previous and new amount]
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(previousWithdrawElement.innerText);



    // Step 4 [Get wBalance total & convert parseFlote & minus(-) previous Balance total and new Withdraw Amount]
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Insufficient balance");
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    previousWithdrawElement.innerText = currentWithdrawTotal;


    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal

})