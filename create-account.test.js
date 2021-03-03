const { createAccount } = require("./create-account");

describe("createAccount", function() {
  let account;
  let bigAccount;

  beforeEach(function() {
    account = createAccount("1234");
    bigAccount = createAccount("4321", 10000);
  });

  it("has four methods on it", function() {
    expect(account.checkBalance).toBeInstanceOf(Function);
    expect(account.deposit).toBeInstanceOf(Function);
    expect(account.withdraw).toBeInstanceOf(Function);
    expect(account.changePin).toBeInstanceOf(Function);
  });

  it("accepts an optional starting balance as a second argument", function() {
    expect(bigAccount.checkBalance("4321")).toBe(10000);
  });

  describe("checkBalance", function() {
    it("returns 'Invalid PIN.' if the PIN doesn't match", function() {
      expect(account.checkBalance("nope")).toBe("Invalid PIN.");
    });

    it("returns the balance if the pin is correct", function() {
      expect(account.checkBalance("1234")).toBe(0);
    });
  });

  describe("deposit", function() {
    it("returns 'Invalid PIN.' if the PIN doesn't match", function() {
      expect(account.deposit("nope", 100)).toBe("Invalid PIN.");
    });
  });

  describe("withdraw", function() {
    it("returns 'Invalid PIN.' if the PIN doesn't match", function() {
      expect(bigAccount.withdraw("nope", 100)).toBe("Invalid PIN.");
    });
  });

  describe("changePin", function() {
    it("returns 'Invalid PIN.' if the PIN doesn't match", function() {
      expect(bigAccount.withdraw("nope", 100)).toBe("Invalid PIN.");
    });
  });
});
