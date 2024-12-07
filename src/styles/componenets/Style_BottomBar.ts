import styled from 'styled-components';
import { colors } from '@/styles/Style_Common';

export const BottomNavBar = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    background-color: ${colors.mainColor_4};
    border-top: 1px solid ${colors.mainColor_3};
    display: flex;
    z-index: 1000;
`;

export const ItemIcon = styled.img`
    width: 30px;
`
export const ItemTitle = styled.a`
    color: ${colors.mainColor_1};
    font-size: 15px;
    font-weight: bold;
`
export const MainIcon = styled.img`
    width: 40px;
`

export const HomeButton = styled.div`
    background-color: ${colors.mainColor_2};
    color: white;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`

export const ItemButton = styled.div`
    background-color: ${colors.mainColor_2};
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`