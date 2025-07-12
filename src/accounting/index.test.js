const { runApp, getBalance, creditAccount, debitAccount, resetBalance } = require('./index');

describe('Student Account Management System', () => {
  beforeEach(() => {
    resetBalance();
  });

  test('TC01: View initial balance', () => {
    expect(getBalance()).toBe(1000.00);
  });

  test('TC02: Credit account with valid amount', () => {
    creditAccount(100);
    expect(getBalance()).toBe(1100.00);
  });

  test('TC03: Debit account with valid amount', () => {
    creditAccount(100); // Ensure sufficient funds
    debitAccount(50);
    expect(getBalance()).toBe(1050.00);
  });

  test('TC04: Debit account with insufficient funds', () => {
    expect(debitAccount(2000)).toBe('Insufficient funds for this debit.');
    expect(getBalance()).toBe(1000.00);
  });

  test('TC05: Credit account with zero amount', () => {
    creditAccount(0);
    expect(getBalance()).toBe(1000.00);
  });

  test('TC06: Debit account with zero amount', () => {
    debitAccount(0);
    expect(getBalance()).toBe(1000.00);
  });

  test('TC07: Invalid menu selection', () => {
    expect(runApp('5')).toBe('Invalid choice, please select 1-4.');
  });

  test('TC08: Exit application', () => {
    expect(runApp('4')).toBe('Exiting the program. Goodbye!');
  });

  test('TC09: Multiple operations sequence', () => {
    creditAccount(100);
    debitAccount(50);
    expect(getBalance()).toBe(1050.00);
  });
});
