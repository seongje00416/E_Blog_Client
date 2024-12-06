import styled from 'styled-components';
import { colors } from '@/styles/Style_Common';

export const ChatListContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    max-height: calc(100vh - 95px);
`

export const PageWrapper = styled.div`
    width: 100%;
    border-right: 1px solid ${colors.mainColor_3};
    background-color: ${colors.mainColor_4};
`

export const PageDivider = styled.div`
    display: flex;
    flex-direction: row;
`

export const ChatHeader = styled.div`
    padding: 20px;
    background-color: ${colors.mainColor_2};
    color: ${colors.mainColor_4};
    font-size: 1.2rem;
    font-weight: bold;
    height: 4vh;
    display: flex;
    align-items: center;
`;

export const ChatRoomList = styled.div`
    overflow-y: auto;
    height: calc(100vh - 70px);
    width: 100%;
    flex: 2;
`;

export const ChatRoomItem = styled.div`
    display: flex;
    padding: 15px;
    border-bottom: 1px solid ${colors.mainColor_3};
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${colors.mainColor_3};
    }
`;

export const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
`;

export const ChatInfo = styled.div`
    flex: 1;
`;

export const ChatterHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const Username = styled.span`
    font-weight: bold;
    color: ${colors.mainColor_1};
`;

export const Timestamp = styled.span`
    font-size: 0.8rem;
    color: #666;
`;

export const LastMessage = styled.p`
    color: #666;
    font-size: 0.9rem;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const UnreadBadge = styled.span`
    background-color: ${colors.mainColor_2};
    color: white;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 0.8rem;
    margin-left: 10px;
`;

export const OnlineStatus = styled.div<{ isOnline: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.isOnline ? '#34D399' : '#999'};
    position: absolute;
    bottom: 0;
    right: 0;
    border: 2px solid white;
`;