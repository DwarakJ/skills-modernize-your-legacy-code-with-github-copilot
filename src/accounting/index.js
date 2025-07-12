
let balance = 1000.00;

function getBalance() {
  return parseFloat(balance.toFixed(2));
}

function creditAccount(amount) {
  if (isNaN(amount) || amount < 0) {
    return 'Invalid amount.';
  }
  balance += amount;
  return `Amount credited. New balance: ${balance.toFixed(2)}`;
}

function debitAccount(amount) {
  if (isNaN(amount) || amount < 0) {
    return 'Invalid amount.';
  }
  if (balance >= amount) {
    balance -= amount;
    return `Amount debited. New balance: ${balance.toFixed(2)}`;
  } else {
    return 'Insufficient funds for this debit.';
  }
}

function resetBalance() {
  balance = 1000.00;
}

function runApp(choice) {
  switch (choice.trim()) {
    case '1':
      return `Current balance: ${balance.toFixed(2)}`;
    case '2':
      return 'Enter credit amount:';
    case '3':
      return 'Enter debit amount:';
    case '4':
      return 'Exiting the program. Goodbye!';
    default:
      return 'Invalid choice, please select 1-4.';
  }
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function showMenu() {
    console.log('--------------------------------');
    console.log('Account Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    console.log('--------------------------------');
    rl.question('Enter your choice (1-4): ', handleChoice);
  }

  function handleChoice(choice) {
    switch (choice.trim()) {
      case '1':
        console.log(`Current balance: ${balance.toFixed(2)}`);
        showMenu();
        break;
      case '2':
        rl.question('Enter credit amount: ', (amount) => {
          amount = parseFloat(amount);
          if (isNaN(amount) || amount < 0) {
            console.log('Invalid amount.');
          } else {
            balance += amount;
            console.log(`Amount credited. New balance: ${balance.toFixed(2)}`);
          }
          showMenu();
        });
        break;
      case '3':
        rl.question('Enter debit amount: ', (amount) => {
          amount = parseFloat(amount);
          if (isNaN(amount) || amount < 0) {
            console.log('Invalid amount.');
          } else if (balance >= amount) {
            balance -= amount;
            console.log(`Amount debited. New balance: ${balance.toFixed(2)}`);
          } else {
            console.log('Insufficient funds for this debit.');
          }
          showMenu();
        });
        break;
      case '4':
        console.log('Exiting the program. Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid choice, please select 1-4.');
        showMenu();
        break;
    }
  }

  showMenu();
}

module.exports = { getBalance, creditAccount, debitAccount, resetBalance, runApp };
