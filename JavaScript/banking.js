// Withdraw , Deposit & Balance Page Start
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // Deposit Amount Handle
    const depositInput = document.getElementById("deposit-feild");
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    depositInput.value = "";
    const depositTotal = document.getElementById("deposit-total");
    // Calculate Deposit Amount
    const perviousDepositText = depositTotal.innerText;
    const perviousDepositAmount = parseFloat(perviousDepositText);
    const newDepositTotal = perviousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // Update deposit + Total Balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
  });

// Withdraw Amount
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // Withdraw Amount Handle
    const withdrawInput = document.getElementById("withdraw-feild");
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);
    const withdrawTotal = document.getElementById("withdraw-total");
    withdrawInput.value = "";
    // Calculate Withdraw Amount
    const perviousWithdrawText = withdrawTotal.innerText;
    const perviousWithdrawAmount = parseFloat(perviousWithdrawText);
    const newWithdrawTotal = perviousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // Update Withdraw + Total Balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
  });
