# Bank Demo Application - Next.js Version

A comprehensive banking demo application built with Next.js, Tailwind CSS, and shadcn/ui, designed specifically for QA automation testing practice.

## 🚀 Quick Start

1. **Navigate to the application:**
   ```
   http://localhost:3000/bank
   ```

2. **Login Credentials:**
   - Username: `admin`
   - Password: `admin123`

## 📁 Project Structure

```
app/(bank)/
├── layout.js                    # Bank route group layout
└── bank/
    ├── page.jsx                 # Login page
    ├── dashboard/
    │   └── page.jsx            # Dashboard with summaries
    ├── accounts/
    │   └── page.jsx            # Account management (CRUD)
    └── transactions/
        └── page.jsx            # Transaction management

components/bank/
└── BankNavbar.jsx              # Navigation component

lib/
└── bankStorage.js              # LocalStorage utilities
```

## 🎯 Features

### 1. Login Page (`/bank`)
- ✅ Username/password authentication
- ✅ Form validation with shadcn/ui components
- ✅ Password visibility toggle
- ✅ Remember me functionality
- ✅ Theme toggle (Dark/Light mode)
- ✅ Responsive design with Tailwind CSS

### 2. Dashboard (`/bank/dashboard`)
- ✅ Summary cards (Total Balance, Accounts, Transactions)
- ✅ Recent transactions table
- ✅ Accounts overview grid
- ✅ Quick action buttons
- ✅ Navigation with Next.js Link

### 3. Accounts Page (`/bank/accounts`)
- ✅ **Create**: Add new accounts via Dialog modal
- ✅ **Read**: Display accounts in Table
- ✅ **Update**: Edit existing accounts
- ✅ **Delete**: Remove accounts with AlertDialog confirmation
- ✅ Search functionality
- ✅ Filter by account type
- ✅ Sort by name, balance, or date
- ✅ Form validation

### 4. Transactions Page (`/bank/transactions`)
- ✅ Create transactions (Deposit, Withdrawal, Transfer)
- ✅ Transaction history table
- ✅ Filter by account, type, and date range
- ✅ Export to CSV
- ✅ Real-time balance updates
- ✅ Conditional fields (transfer shows "To Account")

## 🧪 Testing Elements

### shadcn/ui Components Used
- `Button` - All action buttons
- `Input` - Text, number, date inputs
- `Label` - Form labels
- `Select` - Dropdown selections
- `Checkbox` - Remember me, overdraft, notifications
- `RadioGroup` - Account status selection
- `Table` - Data display
- `Dialog` - Add/Edit modals
- `AlertDialog` - Delete confirmations
- `Alert` - Error messages
- `Card` - Summary cards
- `Badge` - Status indicators
- `Textarea` - Transaction descriptions

### Automation-Friendly Attributes
All elements include:
- `id` attributes
- `data-testid` attributes
- `data-action` attributes
- `data-column` attributes for tables
- Semantic HTML

### Example Locators

**By ID:**
```javascript
#username
#login-btn
#add-account-btn
#new-transaction-btn
```

**By data-testid:**
```javascript
[data-testid="login-button"]
[data-testid="add-account-button"]
[data-testid="account-row-{id}"]
[data-testid="transaction-row"]
```

**By data-action:**
```javascript
[data-action="login"]
[data-action="add-account"]
[data-action="edit"]
[data-action="delete"]
```

## 🎨 Styling

### Tailwind CSS
- Responsive grid layouts
- Gradient backgrounds
- Hover effects and transitions
- Dark mode support via `next-themes`
- Custom color scheme

### Design Features
- Modern card-based UI
- Smooth animations
- Professional color gradients
- Consistent spacing and typography
- Mobile-responsive design

## 💾 Data Persistence

Uses browser's `localStorage` to persist:
- User accounts
- Transactions
- Theme preference
- Remembered username

**Note:** Data is stored locally. Clearing browser data will reset the application.

## 🔍 Testing Scenarios

### Login Tests
1. Valid login (admin/admin123)
2. Invalid credentials
3. Empty fields validation
4. Remember me functionality
5. Password visibility toggle
6. Theme toggle

### Account Management Tests
1. Create new account (all types)
2. Edit account details
3. Delete account with confirmation
4. Search by name/number
5. Filter by type
6. Sort by name/balance/date
7. Form validation errors
8. Modal open/close

### Transaction Tests
1. Create deposit
2. Create withdrawal
3. Create transfer
4. Insufficient balance validation
5. Filter by account/type/date
6. Export to CSV
7. Conditional field display
8. Character count in description

### Navigation Tests
1. Navigate between pages
2. Logout functionality
3. Session persistence
4. Redirect when not authenticated
5. URL parameter handling (?action=add)

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Theme:** next-themes
- **Language:** JavaScript (JSX)

## 📝 Development

The application is already integrated into your Next.js project. Just navigate to `/bank` to start testing.

### Key Files
- **Storage Logic:** `lib/bankStorage.js`
- **Navigation:** `components/bank/BankNavbar.jsx`
- **Pages:** `app/(bank)/bank/**/*.jsx`

## 🎓 Automation Framework Suggestions

### Page Object Model Example (Playwright)

```javascript
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('[data-testid="login-button"]');
    this.rememberMeCheckbox = page.locator('#remember-me');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
```

### Cypress Example

```javascript
describe('Bank Demo - Login', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('/bank');
    cy.get('[data-testid="username-input"]').type('admin');
    cy.get('[data-testid="password-input"]').type('admin123');
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('include', '/bank/dashboard');
  });
});
```

## ✅ Migration Complete

The bank demo app has been successfully migrated from static HTML to Next.js with:
- ✅ Next.js App Router structure
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui components
- ✅ Client-side rendering for browser APIs
- ✅ Next.js navigation (Link, useRouter)
- ✅ All original functionality preserved
- ✅ Same automation-friendly attributes
- ✅ Enhanced UI/UX with modern components

## 🚀 Ready for Testing!

Navigate to `http://localhost:3000/bank` and start your automation testing practice!

---

**Happy Testing! 🎉**
