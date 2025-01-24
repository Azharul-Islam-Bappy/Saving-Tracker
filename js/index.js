
let totalBalance = JSON.parse(localStorage.getItem("totalBalance")) || 0;

// DOM elements
const balanceAmountElem = document.querySelector(".balance-amount");
const withdraw = document.querySelector("#withdraw");
const withdrawBtn = document.querySelector(".withdraw-btn");
const deposit = document.querySelector("#deposit");
const depositBtn = document.querySelector(".deposit-btn");

const d = []; // for storing deposit related data
const w = []; // for storing Withdraw related data


// event listener on depositBtn
depositBtn.addEventListener("click", () => {
  if (deposit.value === "") {
    alert("please enter amount");
  }
  else{
    totalBalance += deposit.value;
    localStorage.setItem("totalBalance", JSON.stringify(totalBalance));
    
    const date = new Date();
    const obj = {};
    
    obj.date = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    }
    obj.time = {
      hour: date.getHours();
      hour: date.getSeconds();
    }
    obj.amount = deposit.value;
    
    d.push(obj); // pushing datas
    localStorage.setItem("Deposits", JSON.stringify(d)); // saving data to localStorage
    
    balanceAmountElem.innerText = '';
    balanceAmountElem.innerText = Number(totalBalance);
    
    deposit.value = '';
    deposit.placeholder = 'Deposit amount'
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
    localStorage.setItem("totalBalance", JSON.stringify(totalBalance));
    
    const date = new Date();
    const obj = {};
    
    obj.date = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    }
    obj.time = {
      hour: date.getHours();
      hour: date.getSeconds();
    }
    obj.amount = withdraw.value;
    
    w.push(obj); // pushing datas
    localStorage.setItem("Withdraws", JSON.stringify(w)); // saving data to localStorage
    
    withdraw.value = "";
    withdraw.placeholder = "Withdraw amount";
  }
  
});

balanceAmountElem.innerText = totalBalance;