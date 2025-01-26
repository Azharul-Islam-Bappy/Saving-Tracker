
// DOM elements
const totalBalance = document.querySelector(".balance-amount"); 
const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const depositsTable = document.querySelector('.deposits-table');
const withdrawsTable = document.querySelector('.withdraws-table');


let withdrawData = JSON.parse(localStorage.getItem("Withdraws")) || [];
let depositData = JSON.parse(localStorage.getItem("Deposits")) || [];

totalBalance.innerText = JSON.parse(localStorage.getItem("totalBalance"));


// populating the DOM based on condition  
if (depositData.length > 0) {
  depositData.forEach(obj => {
    // creating DOM elements
    let tr = document.createElement('tr');
    let dateElem = document.createElement('td');
    let timeElem = document.createElement('td');
    let amountElem = document.createElement('td');
    
    dateElem.innerText = `${obj.date.day} ${months[obj.date.month]} ${obj.date.year}`; 
    timeElem.innerText = `${obj.time.hour}  ${obj.time.minute}`;
    amountElem.innerText = `${obj.amount}`;
    
    tr.appendChild(dateElem);
    tr.appendChild(timeElem);
    tr.appendChild(amountElem); 
    
    depositsTable.appendChild(tr);
  });
} else {
  depositsTable.innerHTML = '';
  depositsTable.classList.add('no-data');
  depositsTable.innerText = 'No deposits data!!';
}

if (withdrawData.length > 0) {
  withdrawData.forEach(obj => {
    // creating DOM elements
    let tr = document.createElement('tr');
    let dateElem = document.createElement('td');
    let timeElem = document.createElement('td');
    let amountElem = document.createElement('td');
    
    dateElem.innerText = `${obj.date.day} ${months[obj.date.month]} ${obj.date.year}`; 
    timeElem.innerText = `${obj.time.hour} : ${obj.time.minute} min`;
    amountElem.innerText = `${obj.amount}`;
    
    tr.appendChild(dateElem);
    tr.appendChild(timeElem);
    tr.appendChild(amountElem); 
    
    withdrawsTable.appendChild(tr);
  });
} else {
  withdrawsTable.innerHTML = '';
  withdrawsTable.classList.add('no-data');
  withdrawsTable.innerText = 'No withdraw data!!';
}