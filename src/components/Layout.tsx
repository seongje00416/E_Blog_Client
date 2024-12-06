import React from 'react';
import { useBottomNav } from '@/common/hook/useBottomBar';
import BottomNav from '@/components/BottomBar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const showBottomNav = useBottomNav();

    return (
        <div>
            {children}
            {showBottomNav && <BottomNav />}
        </div>
    );
};

export default Layout;