# Test Plan: Student Account Management System

This test plan covers all business logic implemented in the COBOL application for student account management. It is designed to validate the system with business stakeholders and will be used for future unit and integration tests in the Node.js transformation.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|----------------------|----------------|------------|----------------|--------------|--------------------|----------|
| TC01 | View initial balance | Account system is started | 1. Start app<br>2. Select 'View Balance' | Balance displayed as 1000.00 |  |  |  |
| TC02 | Credit account with valid amount | Account system is started | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter amount (e.g., 100)<br>4. View balance | Balance increases by entered amount |  |  |  |
| TC03 | Debit account with valid amount | Account system is started, balance >= debit amount | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter amount less than or equal to balance<br>4. View balance | Balance decreases by entered amount |  |  |  |
| TC04 | Debit account with insufficient funds | Account system is started, balance < debit amount | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter amount greater than balance | Error message: 'Insufficient funds for this debit.'<br>Balance remains unchanged |  |  |  |
| TC05 | Credit account with zero amount | Account system is started | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter amount 0<br>4. View balance | Balance remains unchanged |  |  |  |
| TC06 | Debit account with zero amount | Account system is started | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter amount 0<br>4. View balance | Balance remains unchanged |  |  |  |
| TC07 | Invalid menu selection | Account system is started | 1. Start app<br>2. Enter invalid menu choice (e.g., 5) | Error message: 'Invalid choice, please select 1-4.' |  |  |  |
| TC08 | Exit application | Account system is started | 1. Start app<br>2. Select 'Exit' | Program exits with 'Goodbye!' message |  |  |  |
| TC09 | Multiple operations sequence | Account system is started | 1. Start app<br>2. Credit account<br>3. Debit account<br>4. View balance | Balance reflects all operations correctly |  |  |  |

