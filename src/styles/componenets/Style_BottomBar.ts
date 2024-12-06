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

export const ItemButton = styled.div`
    background-color: ${colors.mainColor_1};
    color: white;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`