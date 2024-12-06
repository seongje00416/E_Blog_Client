import styled from 'styled-components';
import { colors } from './Style_Common';

export const ChatRoomContainer = styled.div`
    display: flex;
    flex: 5;
    max-height: calc( 100vh - 95px );
    flex-direction: column;
    background-color: ${colors.mainColor_3};
    border-left: 1px solid ${colors.mainColor_3};
`;

export const R_ChatHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: ${colors.mainColor_2};
    color: ${colors.mainColor_4};
    border-bottom: 1px solid ${colors.mainColor_3};
`;

export const R_ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
`;

export const UserInfo = styled.div`
    flex: 1;
    height: 5vh;
`;

export const R_Username = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
`;

export const UserStatus = styled.div`
    font-size: 0.8rem;
    opacity: 0.8;
`;

export const MessageList = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${colors.mainColor_4};
`;

export const MessageBubble = styled.div<{ isMine: boolean }>`
    max-width: 70%;
    padding: 10px 15px;
    border-radius: 15px;
    align-self: ${props => props.isMine ? 'flex-end' : 'flex-start'};
    background-color: ${props => props.isMine ? colors.mainColor_2 : colors.mainColor_3};
    color: ${props => props.isMine ? colors.mainColor_4 : colors.mainColor_1};
`;

export const MessageTime = styled.div<{ isMine: boolean }>`
    font-size: 0.7rem;
    margin-top: 5px;
    text-align: ${props => props.isMine ? 'right' : 'left'};
    color: #666;
`;

export const ChatInputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: ${colors.mainColor_4};
    border-top: 1px solid ${colors.mainColor_3};
`;

export const ChatInput = styled.input`
    flex: 1;
    padding: 10px 15px;
    border: 1px solid ${colors.mainColor_3};
    border-radius: 20px;
    margin-right: 10px;
    outline: none;
    font-size: 0.9rem;

    &:focus {
        border-color: ${colors.mainColor_2};
    }
`;

export const SendButton = styled.button`
    padding: 10px 20px;
    background-color: ${colors.mainColor_2};
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: ${colors.mainColor_1};
    }

    &:disabled {
        background-color: ${colors.mainColor_3};
        cursor: not-allowed;
    }
`;