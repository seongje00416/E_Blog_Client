import React from 'react';
import { BottomNavBar, ItemButton, ItemIcon } from '@/styles/componenets/Style_BottomBar';
import { useNavigate } from 'react-router-dom';

const BottomBar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <BottomNavBar>
            <ItemButton onClick={ () => navigate('/')}>
                <ItemIcon src="/src/resources/icons/social_menu_icon.svg" />
            </ItemButton>
            <ItemButton onClick={ () => navigate('/friends/{:id}')}>
                <ItemIcon src="/src/resources/icons/friends_menu_icon.svg" />
            </ItemButton>
            <ItemButton onClick={ () => navigate('/')}>
                <ItemIcon src="/src/resources/icons/home_menu_icon.svg" />
            </ItemButton>
            <ItemButton onClick={ () => navigate('/chatlist/{:id}')}>
                <ItemIcon src="/src/resources/icons/chat_menu_icon.svg" />
            </ItemButton>
            <ItemButton onClick={ () => navigate('/mypage/{:id}')}>
                <ItemIcon src="/src/resources/icons/profile_menu_icon.svg" />
            </ItemButton>
        </BottomNavBar>
    );
};

export default BottomBar;