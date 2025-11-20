// Dashboard Module
// Handles dashboard data display and interactions

// Load dashboard data
function loadDashboard() {
    displaySummaryCards();
    displayRecentTransactions();
    displayAccountsOverview();
}

// Display summary cards
function displaySummaryCards() {
    const accounts = getAccounts();
    const transactions = getTransactions();
    const totalBalance = getTotalBalance();

    document.getElementById('total-balance').textContent = formatCurrency(totalBalance);
    document.getElementById('accounts-count').textContent = accounts.length;
    document.getElementById('transactions-count').textContent = transactions.length;
}

// Display recent transactions
function displayRecentTransactions() {
    const recentTransactions = getRecentTransactions(5);
    const tbody = document.getElementById('transactions-tbody');

    if (recentTransactions.length === 0) {
        tbody.innerHTML = '<tr class="empty-state"><td colspan="5" class="text-center">No transactions yet</td></tr>';
        return;
    }

    tbody.innerHTML = recentTransactions.map(transaction => `
        <tr data-transaction-id="${transaction.id}">
            <td>${formatDate(transaction.date)}</td>
            <td>
                <span class="transaction-type type-${transaction.type}">
                    ${getTransactionIcon(transaction.type)} ${capitalizeFirst(transaction.type)}
                </span>
            </td>
            <td>${transaction.accountName}</td>
            <td class="${transaction.type === 'withdrawal' ? 'type-withdrawal' : 'type-deposit'}">
                ${transaction.type === 'withdrawal' ? '-' : '+'}${formatCurrency(transaction.amount)}
            </td>
            <td>
                <span class="status-badge status-${transaction.status}">
                    ${capitalizeFirst(transaction.status)}
                </span>
            </td>
        </tr>
    `).join('');
}

// Display accounts overview
function displayAccountsOverview() {
    const accounts = getAccounts();
    const accountsList = document.getElementById('accounts-list');

    if (accounts.length === 0) {
        accountsList.innerHTML = `
            <div class="empty-state-card">
                <p>No accounts found. Create your first account!</p>
            </div>
        `;
        return;
    }

    accountsList.innerHTML = accounts.map(account => `
        <div class="summary-card" data-account-id="${account.id}">
            <div class="card-icon">${getAccountIcon(account.type)}</div>
            <div class="card-content">
                <h3 class="card-label">${account.name}</h3>
                <p class="card-value">${formatCurrency(account.balance)}</p>
                <p style="font-size: 0.875rem; color: var(--text-secondary);">
                    ${capitalizeFirst(account.type)} • ${account.accountNumber}
                </p>
            </div>
        </div>
    `).join('');
}

// Get transaction icon
function getTransactionIcon(type) {
    const icons = {
        'deposit': '💰',
        'withdrawal': '💸',
        'transfer': '🔄'
    };
    return icons[type] || '💵';
}

// Get account icon
function getAccountIcon(type) {
    const icons = {
        'savings': '🏦',
        'checking': '💳',
        'credit': '💎'
    };
    return icons[type] || '💰';
}

// Capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Load dashboard on page load
window.addEventListener('DOMContentLoaded', loadDashboard);
