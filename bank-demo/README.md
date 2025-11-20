# Bank Demo Application - Automation Testing Practice

A comprehensive banking demo application designed specifically for QA automation testing practice. This application includes login authentication, account management, and transaction features with extensive use of various HTML elements and browser events.

## 🎯 Purpose

This application is built to help QA engineers practice automation testing with:
- Multiple HTML elements and input types
- Various browser events and interactions
- CRUD operations
- Form validation
- Dynamic content
- Local storage persistence
- Modal dialogs
- Data filtering and searching

## 🔐 Login Credentials

**Username:** `admin`  
**Password:** `admin123`

## 📋 Features

### 1. Login Page (`index.html`)
- Username and password authentication
- Form validation
- Password visibility toggle
- Remember me functionality
- Theme toggle (Dark/Light mode)
- Error message display

### 2. Dashboard (`dashboard.html`)
- Account summary cards
- Total balance display
- Recent transactions table
- Quick action buttons
- Accounts overview

### 3. Accounts Management (`accounts.html`)
- **Create** new accounts with modal form
- **Read** accounts in a sortable table
- **Update** existing accounts
- **Delete** accounts with confirmation
- Search functionality
- Filter by account type
- Sort by name, balance, or date

### 4. Transactions (`transactions.html`)
- Create new transactions (Deposit, Withdrawal, Transfer)
- View transaction history
- Filter by account, type, and date range
- Export transactions to CSV
- Real-time balance updates

## 🧪 Testing Elements

### HTML Elements Included
- Text inputs
- Password inputs
- Number inputs
- Date inputs
- Textareas
- Select dropdowns
- Checkboxes
- Radio buttons
- Buttons (submit, button, reset types)
- Tables
- Forms
- Modals
- Alerts

### Events to Test
- `click` - Button clicks, navigation
- `submit` - Form submissions
- `change` - Dropdown and radio button changes
- `input` - Real-time input validation
- `blur` - Field validation on focus loss
- `focus` - Field highlighting
- `keypress` - Character counting

### Locator Strategies
All elements include multiple locator options:
- **ID attributes** - `id="username"`, `id="login-btn"`
- **Data attributes** - `data-testid="login-button"`, `data-action="login"`
- **Name attributes** - `name="username"`, `name="accountType"`
- **Class names** - `.btn-primary`, `.form-input`
- **CSS selectors** - Available for all elements
- **XPath** - Can be constructed for any element

## 🚀 Getting Started

### Installation
1. Clone or download this repository
2. No installation required - pure HTML, CSS, and JavaScript
3. Open `index.html` in your browser

### Running the Application
Simply open `index.html` in any modern web browser. The application uses local storage for data persistence.

## 📁 File Structure

```
bank-demo/
├── index.html          # Login page
├── dashboard.html      # Dashboard page
├── accounts.html       # Accounts management page
├── transactions.html   # Transactions page
├── styles.css          # All styling
├── auth.js            # Authentication logic
├── storage.js         # Local storage operations
├── dashboard.js       # Dashboard functionality
├── accounts.js        # Account CRUD operations
├── transactions.js    # Transaction management
└── README.md          # This file
```

## 🎨 Features for Automation Testing

### 1. Unique Identifiers
Every interactive element has:
- Unique `id` attribute
- `data-testid` attribute for testing
- `data-action` attribute for action identification

### 2. Predictable Behavior
- Consistent element naming
- Standard form validation
- Predictable error messages
- Stable element states

### 3. Test Scenarios

#### Login Tests
- ✅ Valid login
- ❌ Invalid username
- ❌ Invalid password
- ❌ Empty fields
- ✅ Remember me functionality
- ✅ Password visibility toggle

#### Account Management Tests
- ✅ Create new account
- ✅ Edit existing account
- ✅ Delete account
- ✅ Search accounts
- ✅ Filter by type
- ✅ Sort accounts
- ❌ Validation errors

#### Transaction Tests
- ✅ Create deposit
- ✅ Create withdrawal
- ✅ Create transfer
- ❌ Insufficient balance
- ✅ Filter transactions
- ✅ Export to CSV

#### UI/UX Tests
- ✅ Theme toggle
- ✅ Navigation between pages
- ✅ Modal open/close
- ✅ Form reset
- ✅ Responsive design

## 💾 Data Persistence

The application uses browser's `localStorage` to persist:
- User accounts
- Transactions
- Theme preference
- Remembered username

**Note:** Data is stored locally in your browser. Clearing browser data will reset the application.

## 🎓 Automation Framework Suggestions

### Recommended Tools
- **Selenium WebDriver** (Java, Python, JavaScript)
- **Playwright** (JavaScript, TypeScript, Python)
- **Cypress** (JavaScript)
- **TestCafe** (JavaScript)
- **Puppeteer** (JavaScript)

### Page Object Model Example

```javascript
class LoginPage {
    get usernameInput() { return $('#username'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('[data-testid="login-button"]'); }
    get rememberMeCheckbox() { return $('#remember-me'); }
    
    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}
```

## 🐛 Known Limitations

- No backend server - all data is client-side
- No real authentication - hardcoded credentials
- No email notifications (checkbox is cosmetic)
- Export feature creates CSV but doesn't validate data
- No transaction history limits

## 📝 License

This is a demo application for educational and testing purposes only. Feel free to use, modify, and distribute.

## 🤝 Contributing

This is a practice application. Feel free to fork and enhance with additional features for testing practice!

## 📧 Support

For issues or questions about using this application for automation testing practice, please refer to the code comments and element attributes.

---

**Happy Testing! 🚀**
