'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function BankLayout({ children }) {
    const pathname = usePathname();
    const isLoginPage = pathname === '/bank';

    useEffect(() => {
        // Only add bank-page class if NOT on login page
        if (!isLoginPage) {
            document.body.classList.add('bank-page');
        } else {
            document.body.classList.remove('bank-page');
        }

        return () => {
            document.body.classList.remove('bank-page');
        };
    }, [isLoginPage]);

    return (
        <div className="bank-app min-h-screen container mx-auto max-w-5xl">
            {children}
        </div>
    );
}
