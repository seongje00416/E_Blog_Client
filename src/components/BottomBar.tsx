import React from 'react';
import { BottomNavBar, ItemButton, ItemIcon, HomeButton, MainIcon, ItemTitle } from '@/styles/componenets/Style_BottomBar';
import { useNavigate } from 'react-router-dom';

const BottomBar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <BottomNavBar>
            <ItemButton onClick={ () => navigate('/')}>
                <ItemIcon src="/src/resources/icons/social_menu_icon.svg" />
                <ItemTitle> 커뮤니티 </ItemTitle>
            </ItemButton>
            <ItemButton onClick={ () => navigate('/')}>
                <ItemIcon src="/src/resources/icons/video_menu_icon.svg" />
                <ItemTitle> 동영상 </ItemTitle>
            </ItemButton>
            <ItemButton onClick={ () => navigate('/')}>
                <ItemIcon src="/src/resources/icons/view_menu_icon.svg" />
                <ItemTitle> 뷰 </ItemTitle>
            </ItemButton>
            <HomeButton onClick={ () => navigate('/')}>
                <MainIcon src="/src/resources/icons/home_menu_icon.svg" />
            </HomeButton>
            <ItemButton onClick={ () => navigate('/friends/{:id}')}>
                <ItemIcon src="/src/resources/icons/friends_menu_icon.svg" />
                <ItemTitle> 친구 </ItemTitle>
            </ItemButton>
            <ItemButton onClick={ () => navigate('/chatlist/{:id}')}>
                <ItemIcon src="/src/resources/icons/chat_menu_icon.svg" />
                <ItemTitle> 메세지 </ItemTitle>
            </ItemButton>
            <ItemButton onClick={ () => navigate('/mypage/{:id}')}>
                <ItemIcon src="/src/resources/icons/profile_menu_icon.svg" />
                <ItemTitle> 마이페이지 </ItemTitle>
            </ItemButton>
        </BottomNavBar>
    );
};

export default BottomBar;