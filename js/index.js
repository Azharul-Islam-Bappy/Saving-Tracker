
let totalBalance = JSON.parse(localStorage.getItem("totalBalance")) || 0;

// DOM elements
const balanceAmountElem = document.querySelector(".balance-amount");
const withdraw = document.querySelector("#withdraw");
const withdrawBtn = document.querySelector(".withdraw-btn");
const deposit = document.querySelector("#deposit");
const depositBtn = document.querySelector(".deposit-btn");

// event listener on depositBtn
depositBtn.addEventListener("click", () => {
  if (deposit.value === "") {
    alert("please enter amount");
  }
  else{
    totalBalance += deposit.value;
    localStorage.setItem("totalBalance", JSON.stringify(totalBalance));
    
    deposit.value = '';
    deposit.placeholder = 'Deposit amount'
    balanceAmountElem.innerText = '';
    balanceAmountElem.innerText = Number(totalBalance);
  }
});

// event listener on withdrawBtn
withdrawBtn.addEventListener("click", () => {
  if (withdraw.value === "") {
    alert("please enter amount");
  }
  else if (totalBalance === 0) {
    alert("Sorry, your balance is 0");
    withdraw.value = "";
    withdraw.placeholder = "Withdraw amount";
  }
  else if (Number(withdraw.value) > Number(totalBalance)) {
    alert("withdraw amount exceds total balance");
    withdraw.value = "";
    withdraw.placeholder = "Withdraw amount";
  }
  else{
    totalBalance -= Number(withdraw.value)
    withdraw.value = "";
    withdraw.placeholder = "Withdraw amount";
    localStorage.setItem("totalBalance", JSON.stringify(totalBalance));
  }
  
});

balanceAmountElem.innerText = totalBalance;