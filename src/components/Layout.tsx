import React from 'react';
import { useBottomNav } from '@/common/hook/useBottomBar';
import { useMenuBar } from "@/common/hook/useMenuBar";
import BottomNav from '@/components/BottomBar';
import MenuNav from '@/components/MenuBar'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const showBottomNav = useBottomNav();
    const showMenuNav = useMenuBar();

    return (
        <div>
            {children}
            {showBottomNav && <BottomNav />}
            {showMenuNav && <MenuNav />}
        </div>
    );
};

export default Layout;