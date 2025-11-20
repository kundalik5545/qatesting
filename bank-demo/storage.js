// Local Storage Management Module
// Handles all data persistence using localStorage

// Initialize default data
function initializeData() {
    if (!localStorage.getItem('bankAccounts')) {
        const defaultAccounts = [
            {
                id: generateId(),
                accountNumber: '1001234567',
                name: 'Primary Savings',
                type: 'savings',
                balance: 5000.00,
                status: 'active',
                overdraft: false,
                createdDate: new Date().toISOString()
            },
            {
                id: generateId(),
                accountNumber: '1001234568',
                name: 'Checking Account',
                type: 'checking',
                balance: 2500.00,
                status: 'active',
                overdraft: true,
                createdDate: new Date().toISOString()
            }
        ];
        localStorage.setItem('bankAccounts', JSON.stringify(defaultAccounts));
    }

    if (!localStorage.getItem('bankTransactions')) {
        const defaultTransactions = [
            {
                id: generateId(),
                transactionId: 'TXN' + Date.now(),
                date: new Date().toISOString(),
                type: 'deposit',
                accountId: JSON.parse(localStorage.getItem('bankAccounts'))[0].id,
                accountName: 'Primary Savings',
                amount: 1000.00,
                balanceAfter: 5000.00,
                description: 'Initial deposit',
                status: 'completed'
            }
        ];
        localStorage.setItem('bankTransactions', JSON.stringify(defaultTransactions));
    }
}

// Generate unique ID
function generateId() {
    return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Generate account number
function generateAccountNumber() {
    return '100' + Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
}

// Account operations
function getAccounts() {
    const accounts = localStorage.getItem('bankAccounts');
    return accounts ? JSON.parse(accounts) : [];
}

function getAccountById(id) {
    const accounts = getAccounts();
    return accounts.find(acc => acc.id === id);
}

function saveAccount(account) {
    const accounts = getAccounts();

    if (account.id) {
        // Update existing account
        const index = accounts.findIndex(acc => acc.id === account.id);
        if (index !== -1) {
            accounts[index] = account;
        }
    } else {
        // Add new account
        account.id = generateId();
        account.accountNumber = generateAccountNumber();
        account.createdDate = new Date().toISOString();
        accounts.push(account);
    }

    localStorage.setItem('bankAccounts', JSON.stringify(accounts));
    return account;
}

function deleteAccount(id) {
    let accounts = getAccounts();
    accounts = accounts.filter(acc => acc.id !== id);
    localStorage.setItem('bankAccounts', JSON.stringify(accounts));
}

function updateAccountBalance(accountId, newBalance) {
    const accounts = getAccounts();
    const account = accounts.find(acc => acc.id === accountId);
    if (account) {
        account.balance = newBalance;
        localStorage.setItem('bankAccounts', JSON.stringify(accounts));
    }
}

// Transaction operations
function getTransactions() {
    const transactions = localStorage.getItem('bankTransactions');
    return transactions ? JSON.parse(transactions) : [];
}

function saveTransaction(transaction) {
    const transactions = getTransactions();

    transaction.id = generateId();
    transaction.transactionId = 'TXN' + Date.now();
    transaction.date = new Date().toISOString();
    transaction.status = 'completed';

    transactions.unshift(transaction); // Add to beginning
    localStorage.setItem('bankTransactions', JSON.stringify(transactions));

    return transaction;
}

// Get recent transactions (last N)
function getRecentTransactions(limit = 5) {
    const transactions = getTransactions();
    return transactions.slice(0, limit);
}

// Filter transactions
function filterTransactions(filters) {
    let transactions = getTransactions();

    if (filters.accountId && filters.accountId !== 'all') {
        transactions = transactions.filter(t => t.accountId === filters.accountId);
    }

    if (filters.type && filters.type !== 'all') {
        transactions = transactions.filter(t => t.type === filters.type);
    }

    if (filters.dateFrom) {
        const fromDate = new Date(filters.dateFrom);
        transactions = transactions.filter(t => new Date(t.date) >= fromDate);
    }

    if (filters.dateTo) {
        const toDate = new Date(filters.dateTo);
        toDate.setHours(23, 59, 59);
        transactions = transactions.filter(t => new Date(t.date) <= toDate);
    }

    return transactions;
}

// Calculate total balance
function getTotalBalance() {
    const accounts = getAccounts();
    return accounts.reduce((total, acc) => total + parseFloat(acc.balance), 0);
}

// Clear all data
function clearAllData() {
    localStorage.removeItem('bankAccounts');
    localStorage.removeItem('bankTransactions');
    initializeData();
}

// Format currency
function formatCurrency(amount) {
    return '$' + parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Format datetime
function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Initialize data on load
initializeData();
