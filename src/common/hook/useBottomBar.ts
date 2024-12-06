import { useLocation } from 'react-router-dom';

export const useBottomNav = () => {
    const location = useLocation();

    // 하단 네비게이션 바를 숨길 경로들
    const hiddenPaths = [
        '/login',
        '/signup',
        '/signUp',
    ];

    return !hiddenPaths.includes(location.pathname);
};