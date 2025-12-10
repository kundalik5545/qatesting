'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BankNavbar from '@/components/bank/BankNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { getAccounts, getRecentTransactions, getTotalBalance, formatCurrency, formatDate, initializeData } from '@/lib/bankStorage';
import { Wallet, CreditCard, TrendingUp, Plus, Eye } from 'lucide-react';

export default function DashboardPage() {
    const router = useRouter();
    const [username, setUsername] = useState('Admin');
    const [totalBalance, setTotalBalance] = useState(0);
    const [accountsCount, setAccountsCount] = useState(0);
    const [transactionsCount, setTransactionsCount] = useState(0);
    const [recentTransactions, setRecentTransactions] = useState([]);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        // Check authentication
        if (typeof window !== 'undefined') {
            const currentUser = sessionStorage.getItem('currentUser');
            if (!currentUser) {
                router.push('/bank');
                return;
            }
            setUsername(currentUser);

            // Initialize data
            initializeData();

            // Load dashboard data
            loadDashboardData();
        }
    }, [router]);

    const loadDashboardData = () => {
        const accountsData = getAccounts();
        const transactionsData = getRecentTransactions(5);
        const balance = getTotalBalance();

        setAccounts(accountsData);
        setAccountsCount(accountsData.length);
        setTotalBalance(balance);
        setTransactionsCount(transactionsData.length);
        setRecentTransactions(transactionsData);
    };

    const getTransactionIcon = (type) => {
        const icons = {
            'deposit': '💰',
            'withdrawal': '💸',
            'transfer': '🔄'
        };
        return icons[type] || '💵';
    };

    const getAccountIcon = (type) => {
        const icons = {
            'savings': '🏦',
            'checking': '💳',
            'credit': '💎'
        };
        return icons[type] || '💰';
    };

    return (
        <div className="min-h-screen bg-background">
            <BankNavbar username={username} />

            <main className="container mx-auto p-6 space-y-6">
                <header className="flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold" id="page-title" data-testid="page-title">
                            Dashboard
                        </h1>
                        <p className="text-muted-foreground mt-2" id="welcome-message" data-testid="welcome-message">
                            Welcome back, <span id="user-name">{username}</span>!
                        </p>
                    </div>
                </header>

                {/* Summary Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6" id="summary-section">
                    <Card
                        className="hover:shadow-lg transition-all hover:-translate-y-1"
                        id="total-balance-card"
                        data-testid="total-balance-card"
                    >
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Total Balance
                            </CardTitle>
                            <Wallet className="h-8 w-8 text-purple-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-purple-600" id="total-balance" data-testid="total-balance">
                                {formatCurrency(totalBalance)}
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        className="hover:shadow-lg transition-all hover:-translate-y-1"
                        id="accounts-count-card"
                        data-testid="accounts-count-card"
                    >
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Active Accounts
                            </CardTitle>
                            <CreditCard className="h-8 w-8 text-pink-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-pink-600" id="accounts-count" data-testid="accounts-count">
                                {accountsCount}
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        className="hover:shadow-lg transition-all hover:-translate-y-1"
                        id="transactions-count-card"
                        data-testid="transactions-count-card"
                    >
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Total Transactions
                            </CardTitle>
                            <TrendingUp className="h-8 w-8 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-blue-600" id="transactions-count" data-testid="transactions-count">
                                {transactionsCount}
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Quick Actions */}
                <section className="bg-card p-6 rounded-lg shadow-md" id="quick-actions">
                    <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button
                            asChild
                            className="bg-gradient-to-r from-purple-600 to-pink-600"
                            id="add-account-quick"
                            data-testid="quick-add-account"
                            data-action="add-account"
                        >
                            <Link href="/bank/accounts?action=add">
                                <Plus className="mr-2 h-4 w-4" /> Add Account
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="bg-gradient-to-r from-purple-600 to-pink-600"
                            id="new-transaction-quick"
                            data-testid="quick-new-transaction"
                            data-action="new-transaction"
                        >
                            <Link href="/bank/transactions?action=new">
                                <Plus className="mr-2 h-4 w-4" /> New Transaction
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            id="view-all-accounts"
                            data-testid="quick-view-accounts"
                            data-action="view-accounts"
                        >
                            <Link href="/bank/accounts">
                                <Eye className="mr-2 h-4 w-4" /> View All Accounts
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Recent Transactions */}
                <section className="bg-card p-6 rounded-lg shadow-md" id="recent-transactions-section">
                    <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
                    <div className="rounded-md border">
                        <Table id="recent-transactions-table" data-testid="recent-transactions-table">
                            <TableHeader>
                                <TableRow>
                                    <TableHead data-column="date">Date</TableHead>
                                    <TableHead data-column="type">Type</TableHead>
                                    <TableHead data-column="account">Account</TableHead>
                                    <TableHead data-column="amount">Amount</TableHead>
                                    <TableHead data-column="status">Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody id="transactions-tbody" data-testid="transactions-tbody">
                                {recentTransactions.length === 0 ? (
                                    <TableRow id="empty-transactions">
                                        <TableCell colSpan={5} className="text-center text-muted-foreground">
                                            No transactions yet
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    recentTransactions.map((transaction) => (
                                        <TableRow key={transaction.id} data-transaction-id={transaction.id}>
                                            <TableCell>{formatDate(transaction.date)}</TableCell>
                                            <TableCell>
                                                <span className={`font-medium ${transaction.type === 'deposit' ? 'text-green-600' :
                                                        transaction.type === 'withdrawal' ? 'text-red-600' : 'text-blue-600'
                                                    }`}>
                                                    {getTransactionIcon(transaction.type)} {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                                                </span>
                                            </TableCell>
                                            <TableCell>{transaction.accountName}</TableCell>
                                            <TableCell className={transaction.type === 'withdrawal' ? 'text-red-600' : 'text-green-600'}>
                                                {transaction.type === 'withdrawal' ? '-' : '+'}{formatCurrency(transaction.amount)}
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </section>

                {/* Accounts Overview */}
                <section className="bg-card p-6 rounded-lg shadow-md" id="accounts-overview">
                    <h2 className="text-2xl font-bold mb-4">Accounts Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="accounts-list" data-testid="accounts-grid">
                        {accounts.length === 0 ? (
                            <div className="col-span-full bg-muted p-8 rounded-lg text-center" id="empty-accounts">
                                <p className="text-muted-foreground">No accounts found. Create your first account!</p>
                            </div>
                        ) : (
                            accounts.map((account) => (
                                <Card key={account.id} className="hover:shadow-lg transition-all" data-account-id={account.id}>
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <div className="text-4xl">{getAccountIcon(account.type)}</div>
                                    </CardHeader>
                                    <CardContent>
                                        <h3 className="font-semibold text-lg mb-1">{account.name}</h3>
                                        <p className="text-2xl font-bold text-purple-600 mb-2">
                                            {formatCurrency(account.balance)}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {account.type.charAt(0).toUpperCase() + account.type.slice(1)} • {account.accountNumber}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>
                </section>
            </main>

            <footer className="bg-card border-t mt-8 py-6 text-center text-muted-foreground" id="app-footer">
                <p>&copy; 2025 SecureBank Demo - For Testing Purposes Only</p>
            </footer>
        </div>
    );
}
