// Accounts Management Module
// Handles CRUD operations for bank accounts

let currentEditingAccountId = null;

// Load and display accounts
function loadAccounts() {
    displayAccounts(getAccounts());
}

// Display accounts in table
function displayAccounts(accounts) {
    const tbody = document.getElementById('accounts-tbody');

    if (accounts.length === 0) {
        tbody.innerHTML = '<tr class="empty-state" id="empty-accounts"><td colspan="6" class="text-center">No accounts found</td></tr>';
        return;
    }

    tbody.innerHTML = accounts.map(account => `
        <tr data-account-id="${account.id}" data-testid="account-row-${account.id}">
            <td data-testid="account-number">${account.accountNumber}</td>
            <td data-testid="account-name">${account.name}</td>
            <td data-testid="account-type">
                <span class="status-badge">${capitalizeFirst(account.type)}</span>
            </td>
            <td data-testid="account-balance">${formatCurrency(account.balance)}</td>
            <td data-testid="account-status">
                <span class="status-badge status-${account.status}">
                    ${capitalizeFirst(account.status)}
                </span>
            </td>
            <td>
                <button 
                    class="action-btn edit-btn" 
                    onclick="editAccount('${account.id}')"
                    data-testid="edit-account-${account.id}"
                    data-action="edit"
                >
                    ✏️ Edit
                </button>
                <button 
                    class="action-btn delete-btn" 
                    onclick="confirmDeleteAccount('${account.id}')"
                    data-testid="delete-account-${account.id}"
                    data-action="delete"
                >
                    🗑️ Delete
                </button>
            </td>
        </tr>
    `).join('');
}

// Open add account modal
document.getElementById('add-account-btn')?.addEventListener('click', function () {
    currentEditingAccountId = null;
    document.getElementById('modal-title').textContent = 'Add New Account';
    document.getElementById('account-form').reset();
    document.getElementById('account-id').value = '';
    document.getElementById('account-modal').style.display = 'flex';
});

// Edit account
function editAccount(accountId) {
    currentEditingAccountId = accountId;
    const account = getAccountById(accountId);

    if (!account) return;

    document.getElementById('modal-title').textContent = 'Edit Account';
    document.getElementById('account-id').value = account.id;
    document.getElementById('account-name').value = account.name;
    document.getElementById('account-type').value = account.type;
    document.getElementById('initial-balance').value = account.balance;

    if (account.status === 'active') {
        document.getElementById('status-active').checked = true;
    } else {
        document.getElementById('status-inactive').checked = true;
    }

    document.getElementById('enable-overdraft').checked = account.overdraft || false;

    document.getElementById('account-modal').style.display = 'flex';
}

// Close modal
document.getElementById('close-modal')?.addEventListener('click', function () {
    document.getElementById('account-modal').style.display = 'none';
});

document.getElementById('cancel-btn')?.addEventListener('click', function () {
    document.getElementById('account-modal').style.display = 'none';
});

// Save account
document.getElementById('account-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const accountId = document.getElementById('account-id').value;
    const accountName = document.getElementById('account-name').value.trim();
    const accountType = document.getElementById('account-type').value;
    const initialBalance = parseFloat(document.getElementById('initial-balance').value);
    const accountStatus = document.querySelector('input[name="accountStatus"]:checked').value;
    const enableOverdraft = document.getElementById('enable-overdraft').checked;

    // Validation
    if (!accountName) {
        document.getElementById('account-name-error').textContent = 'Account name is required';
        return;
    }

    if (!accountType) {
        document.getElementById('account-type-error').textContent = 'Please select account type';
        return;
    }

    if (isNaN(initialBalance) || initialBalance < 0) {
        document.getElementById('initial-balance-error').textContent = 'Please enter a valid balance';
        return;
    }

    const account = {
        id: accountId || undefined,
        name: accountName,
        type: accountType,
        balance: initialBalance,
        status: accountStatus,
        overdraft: enableOverdraft
    };

    saveAccount(account);

    document.getElementById('account-modal').style.display = 'none';
    loadAccounts();
    applyFilters();
});

// Confirm delete account
function confirmDeleteAccount(accountId) {
    const account = getAccountById(accountId);
    if (!account) return;

    document.getElementById('delete-message').textContent =
        `Are you sure you want to delete "${account.name}" (${account.accountNumber})?`;

    document.getElementById('delete-modal').style.display = 'flex';

    // Set up confirm button
    document.getElementById('confirm-delete-btn').onclick = function () {
        deleteAccount(accountId);
        document.getElementById('delete-modal').style.display = 'none';
        loadAccounts();
        applyFilters();
    };
}

// Close delete modal
document.getElementById('cancel-delete-btn')?.addEventListener('click', function () {
    document.getElementById('delete-modal').style.display = 'none';
});

// Search functionality
document.getElementById('search-input')?.addEventListener('input', function () {
    applyFilters();
});

// Filter by type
document.getElementById('filter-type')?.addEventListener('change', function () {
    applyFilters();
});

// Sort functionality
document.getElementById('sort-by')?.addEventListener('change', function () {
    applyFilters();
});

// Apply filters
function applyFilters() {
    let accounts = getAccounts();

    // Search filter
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm) {
        accounts = accounts.filter(acc =>
            acc.name.toLowerCase().includes(searchTerm) ||
            acc.accountNumber.includes(searchTerm)
        );
    }

    // Type filter
    const typeFilter = document.getElementById('filter-type').value;
    if (typeFilter !== 'all') {
        accounts = accounts.filter(acc => acc.type === typeFilter);
    }

    // Sort
    const sortBy = document.getElementById('sort-by').value;
    accounts.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'balance') {
            return b.balance - a.balance;
        } else if (sortBy === 'date') {
            return new Date(b.createdDate) - new Date(a.createdDate);
        }
        return 0;
    });

    displayAccounts(accounts);
}

// Reset filters
document.getElementById('reset-filters-btn')?.addEventListener('click', function () {
    document.getElementById('search-input').value = '';
    document.getElementById('filter-type').value = 'all';
    document.getElementById('sort-by').value = 'name';
    loadAccounts();
});

// Capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Check for action parameter in URL
window.addEventListener('DOMContentLoaded', function () {
    loadAccounts();

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('action') === 'add') {
        document.getElementById('add-account-btn').click();
    }
});
