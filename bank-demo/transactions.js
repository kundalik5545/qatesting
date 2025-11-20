// Transactions Module
// Handles transaction creation and display

// Load and display transactions
function loadTransactions() {
    populateAccountDropdowns();
    displayTransactions(getTransactions());
}

// Populate account dropdowns
function populateAccountDropdowns() {
    const accounts = getAccounts();
    const filterAccountSelect = document.getElementById('filter-account');
    const fromAccountSelect = document.getElementById('from-account');
    const toAccountSelect = document.getElementById('to-account');

    // Filter dropdown
    if (filterAccountSelect) {
        const currentValue = filterAccountSelect.value;
        filterAccountSelect.innerHTML = '<option value="all">All Accounts</option>' +
            accounts.map(acc => `<option value="${acc.id}">${acc.name} (${acc.accountNumber})</option>`).join('');
        filterAccountSelect.value = currentValue;
    }

    // From account dropdown
    if (fromAccountSelect) {
        fromAccountSelect.innerHTML = '<option value="">Select account</option>' +
            accounts.map(acc => `<option value="${acc.id}" data-balance="${acc.balance}">${acc.name} - ${formatCurrency(acc.balance)}</option>`).join('');
    }

    // To account dropdown
    if (toAccountSelect) {
        toAccountSelect.innerHTML = '<option value="">Select account</option>' +
            accounts.map(acc => `<option value="${acc.id}">${acc.name} (${acc.accountNumber})</option>`).join('');
    }
}

// Display transactions
function displayTransactions(transactions) {
    const tbody = document.getElementById('transactions-tbody');

    if (transactions.length === 0) {
        tbody.innerHTML = '<tr class="empty-state"><td colspan="7" class="text-center">No transactions found</td></tr>';
        return;
    }

    tbody.innerHTML = transactions.map(transaction => `
        <tr data-transaction-id="${transaction.id}" data-testid="transaction-row">
            <td data-testid="transaction-id">${transaction.transactionId}</td>
            <td data-testid="transaction-date">${formatDateTime(transaction.date)}</td>
            <td data-testid="transaction-type">
                <span class="transaction-type type-${transaction.type}">
                    ${getTransactionIcon(transaction.type)} ${capitalizeFirst(transaction.type)}
                </span>
            </td>
            <td data-testid="transaction-account">${transaction.accountName}</td>
            <td class="${transaction.type === 'withdrawal' ? 'type-withdrawal' : 'type-deposit'}" data-testid="transaction-amount">
                ${transaction.type === 'withdrawal' ? '-' : '+'}${formatCurrency(transaction.amount)}
            </td>
            <td data-testid="balance-after">${formatCurrency(transaction.balanceAfter)}</td>
            <td data-testid="transaction-description">${transaction.description || '-'}</td>
        </tr>
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

// Capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Open new transaction modal
document.getElementById('new-transaction-btn')?.addEventListener('click', function () {
    document.getElementById('transaction-form').reset();
    document.getElementById('transaction-modal').style.display = 'flex';
    document.getElementById('transaction-alert').style.display = 'none';
    document.getElementById('to-account-group').style.display = 'none';
    populateAccountDropdowns();
});

// Close modal
document.getElementById('close-modal')?.addEventListener('click', function () {
    document.getElementById('transaction-modal').style.display = 'none';
});

document.getElementById('cancel-transaction-btn')?.addEventListener('click', function () {
    document.getElementById('transaction-modal').style.display = 'none';
});

// Transaction type change handler
document.getElementById('transaction-type')?.addEventListener('change', function () {
    const toAccountGroup = document.getElementById('to-account-group');
    if (this.value === 'transfer') {
        toAccountGroup.style.display = 'block';
        document.getElementById('to-account').required = true;
    } else {
        toAccountGroup.style.display = 'none';
        document.getElementById('to-account').required = false;
    }
});

// From account change handler - show available balance
document.getElementById('from-account')?.addEventListener('change', function () {
    const selectedOption = this.options[this.selectedIndex];
    const balance = selectedOption.getAttribute('data-balance');
    if (balance) {
        document.getElementById('available-balance').textContent = `Available balance: ${formatCurrency(balance)}`;
    } else {
        document.getElementById('available-balance').textContent = 'Available balance: $0.00';
    }
});

// Submit transaction
document.getElementById('transaction-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const transactionType = document.getElementById('transaction-type').value;
    const fromAccountId = document.getElementById('from-account').value;
    const toAccountId = document.getElementById('to-account').value;
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    const description = document.getElementById('transaction-description').value.trim();

    // Clear previous errors
    document.getElementById('transaction-type-error').textContent = '';
    document.getElementById('from-account-error').textContent = '';
    document.getElementById('to-account-error').textContent = '';
    document.getElementById('transaction-amount-error').textContent = '';
    document.getElementById('transaction-alert').style.display = 'none';

    // Validation
    if (!transactionType) {
        document.getElementById('transaction-type-error').textContent = 'Please select transaction type';
        return;
    }

    if (!fromAccountId) {
        document.getElementById('from-account-error').textContent = 'Please select an account';
        return;
    }

    if (transactionType === 'transfer' && !toAccountId) {
        document.getElementById('to-account-error').textContent = 'Please select destination account';
        return;
    }

    if (transactionType === 'transfer' && fromAccountId === toAccountId) {
        showTransactionAlert('Cannot transfer to the same account');
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('transaction-amount-error').textContent = 'Please enter a valid amount';
        return;
    }

    const fromAccount = getAccountById(fromAccountId);

    // Check sufficient balance for withdrawal and transfer
    if ((transactionType === 'withdrawal' || transactionType === 'transfer') && fromAccount.balance < amount) {
        showTransactionAlert('Insufficient balance for this transaction');
        return;
    }

    // Process transaction
    let newBalance = fromAccount.balance;

    if (transactionType === 'deposit') {
        newBalance += amount;
    } else if (transactionType === 'withdrawal') {
        newBalance -= amount;
    } else if (transactionType === 'transfer') {
        newBalance -= amount;
        const toAccount = getAccountById(toAccountId);
        updateAccountBalance(toAccountId, toAccount.balance + amount);

        // Create corresponding deposit transaction for recipient
        saveTransaction({
            type: 'deposit',
            accountId: toAccountId,
            accountName: toAccount.name,
            amount: amount,
            balanceAfter: toAccount.balance + amount,
            description: `Transfer from ${fromAccount.name}`
        });
    }

    updateAccountBalance(fromAccountId, newBalance);

    // Save transaction
    const transaction = {
        type: transactionType,
        accountId: fromAccountId,
        accountName: fromAccount.name,
        amount: amount,
        balanceAfter: newBalance,
        description: description || (transactionType === 'transfer' ? `Transfer to ${getAccountById(toAccountId).name}` : '')
    };

    saveTransaction(transaction);

    // Close modal and refresh
    document.getElementById('transaction-modal').style.display = 'none';
    loadTransactions();
    applyFilters();

    // Show success message
    alert('Transaction completed successfully!');
});

// Show transaction alert
function showTransactionAlert(message) {
    const alertBox = document.getElementById('transaction-alert');
    const alertMessage = document.getElementById('transaction-alert-message');
    alertMessage.textContent = message;
    alertBox.style.display = 'flex';
}

// Apply filters
document.getElementById('apply-filters-btn')?.addEventListener('click', function () {
    applyFilters();
});

// Reset filters
document.getElementById('reset-filters-btn')?.addEventListener('click', function () {
    document.getElementById('filter-account').value = 'all';
    document.getElementById('filter-transaction-type').value = 'all';
    document.getElementById('date-from').value = '';
    document.getElementById('date-to').value = '';
    loadTransactions();
});

// Apply filters function
function applyFilters() {
    const filters = {
        accountId: document.getElementById('filter-account').value,
        type: document.getElementById('filter-transaction-type').value,
        dateFrom: document.getElementById('date-from').value,
        dateTo: document.getElementById('date-to').value
    };

    const filteredTransactions = filterTransactions(filters);
    displayTransactions(filteredTransactions);
}

// Export transactions
document.getElementById('export-btn')?.addEventListener('click', function () {
    const transactions = getTransactions();

    if (transactions.length === 0) {
        alert('No transactions to export');
        return;
    }

    // Create CSV content
    const headers = ['Transaction ID', 'Date', 'Type', 'Account', 'Amount', 'Balance After', 'Description'];
    const csvContent = [
        headers.join(','),
        ...transactions.map(t => [
            t.transactionId,
            formatDateTime(t.date),
            t.type,
            t.accountName,
            t.amount,
            t.balanceAfter,
            t.description || ''
        ].join(','))
    ].join('\n');

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transactions_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    alert('Transactions exported successfully!');
});

// Load transactions on page load
window.addEventListener('DOMContentLoaded', function () {
    loadTransactions();

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('action') === 'new') {
        document.getElementById('new-transaction-btn').click();
    }
});
