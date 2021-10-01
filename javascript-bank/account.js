/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

var goToBank = {
  deposit: function (amount) {
    var account = new Transaction('deposit', amount);

    if (!amount || amount <= 0 || Math.floor(amount) !== amount) {
      return false;
    } else {
      this.transactions.push(account);
      return true;
    }
  },
  withdraw: function (amount) {
    var account = new Transaction('withdrawal', amount);

    if (!amount || amount <= 0 || Math.floor(amount) !== amount) {
      return false;
    } else {
      this.transactions.push(account);
      return true;
    }
  },
  getBalance: function () {
    var balance = 0;
    if (this.transactions.length === 0) {
      return 0;
    }
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'withdrawal') {
        balance = balance - this.transactions[i].amount;
      }
      if (this.transactions[i].type === 'deposit') {
        balance = balance + this.transactions[i].amount;
      }
    }
    return balance;
  }
};

Object.setPrototypeOf(Account.prototype, goToBank);
