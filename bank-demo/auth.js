// Authentication Module
// Handles login, logout, and session management

// Predefined credentials
const VALID_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Login form handler
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('remember-me').checked;

    // Clear previous errors
    document.getElementById('username-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('login-alert').style.display = 'none';

    // Validation
    let isValid = true;

    if (username === '') {
        document.getElementById('username-error').textContent = 'Username is required';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('password-error').textContent = 'Password is required';
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Check credentials
    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
        // Successful login
        sessionStorage.setItem('currentUser', username);

        if (rememberMe) {
            localStorage.setItem('rememberedUser', username);
        }

        // Show success message briefly
        showAlert('Login successful! Redirecting...', 'success');

        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        // Failed login
        showAlert('Invalid username or password. Please try again.', 'error');

        // Clear password field
        document.getElementById('password').value = '';
    }
});

// Show alert message
function showAlert(message, type = 'error') {
    const alertBox = document.getElementById('login-alert');
    const alertMessage = document.getElementById('alert-message');

    alertMessage.textContent = message;
    alertBox.style.display = 'flex';

    if (type === 'success') {
        alertBox.style.background = 'rgba(16, 185, 129, 0.1)';
        alertBox.style.borderColor = '#10b981';
        alertMessage.style.color = '#10b981';
    } else {
        alertBox.style.background = 'rgba(239, 68, 68, 0.1)';
        alertBox.style.borderColor = '#ef4444';
        alertMessage.style.color = '#ef4444';
    }
}

// Check if user is remembered
window.addEventListener('DOMContentLoaded', function () {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser && document.getElementById('username')) {
        document.getElementById('username').value = rememberedUser;
        document.getElementById('remember-me').checked = true;
    }
});

// Logout function (used in other pages)
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Check authentication (used in protected pages)
function checkAuth() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}
