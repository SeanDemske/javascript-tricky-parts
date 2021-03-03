function createAccount(pin, amount = 0) {
    let balance = amount;
    return {
        checkBalance(pinCheck) {
            if (pin === pinCheck) {
                return balance;
            } else {
                return "Invalid PIN.";
            }
        },
        deposit(pinCheck, depositAmt = 0) {
            if (pin === pinCheck) {
                balance += depositAmt;
            } else {
                return "Invalid PIN.";
            }
        },
        withdraw(pinCheck, withdrawalAmt = 0) {
            if ((pin === pinCheck) && (balance - withdrawalAmt >= 0)) {
                balance -= withdrawalAmt;
            } else if (pin !== pinCheck) {
                return "Invalid PIN.";
            }
        },
        changePin(pinCheck, newPin) {
            if (pin === pinCheck) {
                pin = newPin;
            } else {
                return "Invalid PIN.";
            }
        }
    };
}

module.exports = { createAccount };
