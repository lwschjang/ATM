var boxChecking      = document.getElementById("checking-box");
var boxSavings       = document.getElementById("savings-box");
var depositSavings   = document.getElementById("savings-deposit");
var depositChecking  = document.getElementById("checking-deposit");
var withdrawChecking = document.getElementById("checking-withdraw");
var withdrawSavings  = document.getElementById("savings-withdraw");
var windows          = document.getElementsByClassName('balance');
var acctAmount       = [0, 0];


function checkAmount() {
  for (var i = 0; i < windows.length; i++) {
    if(acctAmount[i] === 0) {
      windows[i].className += " zero"
    }
    else {
      windows[i].className = "balance"
    }
  }
}

function calculateDeposit(amount, acct) {
  acctAmount[acct] += parseInt(amount);
  console.log(amount + " " + acctAmount[acct])
  windows[acct].textContent = "$" + acctAmount[acct];
  checkAmount();
}

function calculateWithdrawl(amount, acct){
  if(acctAmount[acct] - parseInt(amount) >= 0) {
    acctAmount[acct] -= parseInt(amount);
    console.log(amount + " " + acctAmount[acct]);
    windows[acct].textContent = "$" + acctAmount[acct];
  }
  else {;
    alert("You are trying to overdraw")
  }
  checkAmount();
}

depositChecking.addEventListener('click', function(e){
  e.stopPropagation();
  calculateDeposit(boxChecking.value, 0);
});

withdrawChecking.addEventListener('click', function(e){
   e.stopPropagation();
  calculateWithdrawl(boxChecking.value, 0);
});

depositSavings.addEventListener('click', function(e){
   e.stopPropagation();
  calculateDeposit(boxSavings.value, 1);
});

withdrawSavings.addEventListener('click', function(e){
   e.stopPropagation();
  calculateWithdrawl(boxSavings.value, 1);
});
checkAmount();