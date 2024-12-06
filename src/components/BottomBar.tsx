import React from 'react';
import { BottomNavBar, ItemButton } from '@/styles/componenets/Style_BottomBar';
import { useNavigate } from 'react-router-dom';

const BottomBar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <BottomNavBar>
            <ItemButton onClick={ () => navigate('/')}> 소셜 </ItemButton>
            <ItemButton onClick={ () => navigate('/friends/{:id}')}> 추천 </ItemButton>
            <ItemButton onClick={ () => navigate('/')}> 홈 </ItemButton>
            <ItemButton onClick={ () => navigate('/chatlist/{:id}')}> 메세지 </ItemButton>
            <ItemButton onClick={ () => navigate('/mypage/{:id}')}> 프로필 </ItemButton>
        </BottomNavBar>
    );
};

export default BottomBar;