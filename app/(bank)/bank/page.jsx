'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Eye, EyeOff, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function BankLoginPage() {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check if user is already logged in
        if (typeof window !== 'undefined') {
            const currentUser = sessionStorage.getItem('currentUser');
            if (currentUser) {
                router.push('/bank/dashboard');
            }

            // Load remembered username
            const rememberedUser = localStorage.getItem('rememberedUser');
            if (rememberedUser) {
                setUsername(rememberedUser);
                setRememberMe(true);
            }
        }
    }, [router]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear previous errors
        setErrors({});
        setAlertMessage('');

        // Validation
        const newErrors = {};
        if (!username.trim()) {
            newErrors.username = 'Username is required';
        }
        if (!password.trim()) {
            newErrors.password = 'Password is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Check credentials
        if (username === 'admin' && password === 'admin123') {
            // Successful login
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('currentUser', username);

                if (rememberMe) {
                    localStorage.setItem('rememberedUser', username);
                } else {
                    localStorage.removeItem('rememberedUser');
                }
            }

            router.push('/bank/dashboard');
        } else {
            // Failed login
            setAlertMessage('Invalid username or password. Please try again.');
        }
    };

    const handleClear = () => {
        setUsername('');
        setPassword('');
        setRememberMe(false);
        setErrors({});
        setAlertMessage('');
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
            <div className="w-full max-w-md">
                <Card className="backdrop-blur-sm bg-card/95 shadow-2xl">
                    <CardHeader className="text-center space-y-4">
                        <div className="flex justify-center">
                            <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full animate-bounce">
                                <Building2 className="h-12 w-12 text-white" data-testid="bank-logo" />
                            </div>
                        </div>
                        <CardTitle
                            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                            id="app-title"
                        >
                            SecureBank Demo
                        </CardTitle>
                        <CardDescription id="app-subtitle">
                            Automation Testing Practice Application
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} id="login-form" name="loginForm" data-testid="login-form">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your username"
                                        data-testid="username-input"
                                        data-field="username"
                                        autoComplete="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        onBlur={() => {
                                            if (!username.trim()) {
                                                setErrors(prev => ({ ...prev, username: 'Username is required' }));
                                            } else {
                                                setErrors(prev => ({ ...prev, username: '' }));
                                            }
                                        }}
                                    />
                                    {errors.username && (
                                        <p className="text-sm text-destructive" id="username-error" data-testid="username-error">
                                            {errors.username}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            data-testid="password-input"
                                            data-field="password"
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onBlur={() => {
                                                if (!password.trim()) {
                                                    setErrors(prev => ({ ...prev, password: 'Password is required' }));
                                                } else {
                                                    setErrors(prev => ({ ...prev, password: '' }));
                                                }
                                            }}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-0 top-0 h-full px-3"
                                            id="toggle-password"
                                            data-testid="toggle-password-btn"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </Button>
                                    </div>
                                    {errors.password && (
                                        <p className="text-sm text-destructive" id="password-error" data-testid="password-error">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember-me"
                                        name="rememberMe"
                                        data-testid="remember-checkbox"
                                        checked={rememberMe}
                                        onCheckedChange={setRememberMe}
                                    />
                                    <Label htmlFor="remember-me" className="text-sm font-normal cursor-pointer">
                                        Remember me
                                    </Label>
                                </div>

                                {alertMessage && (
                                    <Alert variant="destructive" id="login-alert" data-testid="login-alert">
                                        <AlertDescription id="alert-message">
                                            ⚠️ {alertMessage}
                                        </AlertDescription>
                                    </Alert>
                                )}

                                <div className="space-y-2">
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                        id="login-btn"
                                        data-testid="login-button"
                                        data-action="login"
                                    >
                                        Login
                                    </Button>

                                    <Button
                                        type="button"
                                        variant="secondary"
                                        className="w-full"
                                        id="clear-btn"
                                        data-testid="clear-button"
                                        data-action="clear"
                                        onClick={handleClear}
                                    >
                                        Clear
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </CardContent>

                    <CardFooter>
                        <div className="w-full text-center space-y-2">
                            <div className="bg-muted p-3 rounded-md text-sm" id="demo-credentials">
                                <p className="font-semibold mb-1">Demo Credentials:</p>
                                <p>Username: <code className="bg-primary text-primary-foreground px-2 py-0.5 rounded" data-testid="demo-username">admin</code></p>
                                <p>Password: <code className="bg-primary text-primary-foreground px-2 py-0.5 rounded" data-testid="demo-password">admin123</code></p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>

                <Button
                    variant="outline"
                    size="icon"
                    className="fixed top-4 right-4 rounded-full"
                    id="theme-toggle"
                    data-testid="theme-toggle"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
            </div>
        </div>
    );
}
