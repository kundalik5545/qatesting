'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import BankNavbar from '@/components/bank/BankNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { getAccounts, saveAccount, deleteAccount, formatCurrency, initializeData } from '@/lib/bankStorage';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';

export default function AccountsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [username, setUsername] = useState('Admin');
    const [accounts, setAccounts] = useState([]);
    const [filteredAccounts, setFilteredAccounts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [sortBy, setSortBy] = useState('name');

    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [deleteAccountId, setDeleteAccountId] = useState(null);

    // Form states
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        type: '',
        balance: '',
        status: 'active',
        overdraft: false
    });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const currentUser = sessionStorage.getItem('currentUser');
            if (!currentUser) {
                router.push('/bank');
                return;
            }
            setUsername(currentUser);
            initializeData();
            loadAccounts();

            // Check for action parameter
            if (searchParams.get('action') === 'add') {
                handleAddAccount();
            }
        }
    }, [router, searchParams]);

    useEffect(() => {
        applyFilters();
    }, [accounts, searchTerm, filterType, sortBy]);

    const loadAccounts = () => {
        const accountsData = getAccounts();
        setAccounts(accountsData);
    };

    const applyFilters = () => {
        let filtered = [...accounts];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(acc =>
                acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                acc.accountNumber.includes(searchTerm)
            );
        }

        // Type filter
        if (filterType !== 'all') {
            filtered = filtered.filter(acc => acc.type === filterType);
        }

        // Sort
        filtered.sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'balance') {
                return b.balance - a.balance;
            } else if (sortBy === 'date') {
                return new Date(b.createdDate) - new Date(a.createdDate);
            }
            return 0;
        });

        setFilteredAccounts(filtered);
    };

    const handleAddAccount = () => {
        setCurrentAccount(null);
        setFormData({
            id: '',
            name: '',
            type: '',
            balance: '',
            status: 'active',
            overdraft: false
        });
        setFormErrors({});
        setIsModalOpen(true);
    };

    const handleEditAccount = (account) => {
        setCurrentAccount(account);
        setFormData({
            id: account.id,
            name: account.name,
            type: account.type,
            balance: account.balance,
            status: account.status,
            overdraft: account.overdraft || false
        });
        setFormErrors({});
        setIsModalOpen(true);
    };

    const handleDeleteClick = (accountId) => {
        setDeleteAccountId(accountId);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        deleteAccount(deleteAccountId);
        setIsDeleteModalOpen(false);
        loadAccounts();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Account name is required';
        }
        if (!formData.type) {
            errors.type = 'Please select account type';
        }
        if (!formData.balance || parseFloat(formData.balance) < 0) {
            errors.balance = 'Please enter a valid balance';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const accountData = {
            id: formData.id || undefined,
            name: formData.name,
            type: formData.type,
            balance: parseFloat(formData.balance),
            status: formData.status,
            overdraft: formData.overdraft
        };

        saveAccount(accountData);
        setIsModalOpen(false);
        loadAccounts();
    };

    const resetFilters = () => {
        setSearchTerm('');
        setFilterType('all');
        setSortBy('name');
    };

    return (
        <div className="min-h-screen bg-background">
            <BankNavbar username={username} />

            <main className="container mx-auto p-6 space-y-6">
                <header className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold" id="page-title" data-testid="page-title">
                        Manage Accounts
                    </h1>
                    <Button
                        onClick={handleAddAccount}
                        className="bg-gradient-to-r from-purple-600 to-pink-600"
                        id="add-account-btn"
                        data-testid="add-account-button"
                        data-action="add-account"
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add New Account
                    </Button>
                </header>

                {/* Filters */}
                <section className="bg-card p-6 rounded-lg shadow-md" id="filters-section">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="search-input">Search:</Label>
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="search-input"
                                    placeholder="Search by name or number"
                                    data-testid="search-input"
                                    data-filter="search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="filter-type">Account Type:</Label>
                            <Select value={filterType} onValueChange={setFilterType}>
                                <SelectTrigger id="filter-type" data-testid="filter-type-select" data-filter="type">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    <SelectItem value="savings">Savings</SelectItem>
                                    <SelectItem value="checking">Checking</SelectItem>
                                    <SelectItem value="credit">Credit</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="sort-by">Sort By:</Label>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger id="sort-by" data-testid="sort-by-select" data-sort="field">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="name">Account Name</SelectItem>
                                    <SelectItem value="balance">Balance</SelectItem>
                                    <SelectItem value="date">Date Created</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-end">
                            <Button
                                variant="outline"
                                onClick={resetFilters}
                                id="reset-filters-btn"
                                data-testid="reset-filters-button"
                                className="w-full"
                            >
                                Reset Filters
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Accounts Table */}
                <section className="bg-card rounded-lg shadow-md">
                    <div className="rounded-md border">
                        <Table id="accounts-table" data-testid="accounts-table">
                            <TableHeader>
                                <TableRow>
                                    <TableHead data-column="number">Account Number</TableHead>
                                    <TableHead data-column="name">Account Name</TableHead>
                                    <TableHead data-column="type">Type</TableHead>
                                    <TableHead data-column="balance">Balance</TableHead>
                                    <TableHead data-column="status">Status</TableHead>
                                    <TableHead data-column="actions">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody id="accounts-tbody" data-testid="accounts-tbody">
                                {filteredAccounts.length === 0 ? (
                                    <TableRow id="empty-accounts">
                                        <TableCell colSpan={6} className="text-center text-muted-foreground">
                                            No accounts found
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredAccounts.map((account) => (
                                        <TableRow key={account.id} data-account-id={account.id} data-testid={`account-row-${account.id}`}>
                                            <TableCell data-testid="account-number">{account.accountNumber}</TableCell>
                                            <TableCell data-testid="account-name">{account.name}</TableCell>
                                            <TableCell data-testid="account-type">
                                                <Badge variant="outline">
                                                    {account.type.charAt(0).toUpperCase() + account.type.slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell data-testid="account-balance">{formatCurrency(account.balance)}</TableCell>
                                            <TableCell data-testid="account-status">
                                                <Badge variant={account.status === 'active' ? 'default' : 'secondary'}>
                                                    {account.status.charAt(0).toUpperCase() + account.status.slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-2">
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() => handleEditAccount(account)}
                                                        data-testid={`edit-account-${account.id}`}
                                                        data-action="edit"
                                                    >
                                                        <Pencil className="h-4 w-4 mr-1" /> Edit
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="destructive"
                                                        onClick={() => handleDeleteClick(account.id)}
                                                        data-testid={`delete-account-${account.id}`}
                                                        data-action="delete"
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </section>
            </main>

            {/* Add/Edit Account Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[500px]" id="account-modal" data-testid="account-modal">
                    <DialogHeader>
                        <DialogTitle id="modal-title" data-testid="modal-title">
                            {currentAccount ? 'Edit Account' : 'Add New Account'}
                        </DialogTitle>
                        <DialogDescription>
                            {currentAccount ? 'Update account details below.' : 'Fill in the details to create a new account.'}
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} id="account-form" data-testid="account-form">
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <Label htmlFor="account-name">Account Name *</Label>
                                <Input
                                    id="account-name"
                                    name="accountName"
                                    placeholder="e.g., My Savings Account"
                                    data-testid="account-name-input"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                {formErrors.name && (
                                    <p className="text-sm text-destructive" id="account-name-error">{formErrors.name}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="account-type">Account Type *</Label>
                                <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                                    <SelectTrigger id="account-type" data-testid="account-type-select">
                                        <SelectValue placeholder="Select account type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="savings">Savings Account</SelectItem>
                                        <SelectItem value="checking">Checking Account</SelectItem>
                                        <SelectItem value="credit">Credit Card</SelectItem>
                                    </SelectContent>
                                </Select>
                                {formErrors.type && (
                                    <p className="text-sm text-destructive" id="account-type-error">{formErrors.type}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="initial-balance">Initial Balance *</Label>
                                <Input
                                    id="initial-balance"
                                    name="initialBalance"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    placeholder="0.00"
                                    data-testid="initial-balance-input"
                                    value={formData.balance}
                                    onChange={(e) => setFormData({ ...formData, balance: e.target.value })}
                                />
                                {formErrors.balance && (
                                    <p className="text-sm text-destructive" id="initial-balance-error">{formErrors.balance}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label>Status</Label>
                                <RadioGroup value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="active" id="status-active" data-testid="status-active-radio" />
                                        <Label htmlFor="status-active" className="font-normal cursor-pointer">Active</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="inactive" id="status-inactive" data-testid="status-inactive-radio" />
                                        <Label htmlFor="status-inactive" className="font-normal cursor-pointer">Inactive</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="enable-overdraft"
                                    name="enableOverdraft"
                                    data-testid="overdraft-checkbox"
                                    checked={formData.overdraft}
                                    onCheckedChange={(checked) => setFormData({ ...formData, overdraft: checked })}
                                />
                                <Label htmlFor="enable-overdraft" className="font-normal cursor-pointer">
                                    Enable Overdraft Protection
                                </Label>
                            </div>
                        </div>

                        <DialogFooter>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setIsModalOpen(false)}
                                id="cancel-btn"
                                data-testid="cancel-button"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="bg-gradient-to-r from-purple-600 to-pink-600"
                                id="save-account-btn"
                                data-testid="save-account-button"
                            >
                                Save Account
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <AlertDialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <AlertDialogContent id="delete-modal" data-testid="delete-modal">
                    <AlertDialogHeader>
                        <AlertDialogTitle data-testid="delete-modal-title">Confirm Delete</AlertDialogTitle>
                        <AlertDialogDescription id="delete-message" data-testid="delete-message">
                            Are you sure you want to delete this account? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel id="cancel-delete-btn" data-testid="cancel-delete-button">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteConfirm}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            id="confirm-delete-btn"
                            data-testid="confirm-delete-button"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
