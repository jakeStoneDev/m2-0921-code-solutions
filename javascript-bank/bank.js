/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

var consultBank = {
  openAccount: function (holder, balance) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    if (!balance || balance <= 0 || Math.floor(balance) !== balance) {
      return null;
    } else {
      newAccount.getBalance();
      newAccount.deposit(balance);
      this.accounts.push(newAccount);
      this.nextAccountNumber++;
      return newAccount.number;
    }
  },
  getAccount: function (number) {
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].number === number) {
        return this.accounts[i];
      }
    }
    return null;
  },
  getTotalAssets: function () {
    var assets = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      var thisAccountsBalance = this.accounts[i].getBalance();
      assets = assets + thisAccountsBalance;
    }
    return assets;
  }
}
;

Object.setPrototypeOf(Bank.prototype, consultBank);
