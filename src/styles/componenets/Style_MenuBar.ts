import styled from 'styled-components';
import { colors } from '@/styles/Style_Common';

export const MenuNavBar = styled.nav`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 45px;
    background-color: ${colors.mainColor_1};
    border-top: 1px solid ${colors.mainColor_3};
    z-index: 1000;
`;

export const ItemButton = styled.div`
    color: white;
    width: 10%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

export const LogoDiv = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: white;
    width: 10%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
`