import React from 'react';
import {
    ChatListContainer,
    PageWrapper,
    ChatHeader,
    ChatRoomList,
    PageDivider,
    ChatRoomItem,
    ProfileImage,
    ChatterHeader,
    ChatInfo,
    Username,
    Timestamp,
    LastMessage,
    UnreadBadge,
    OnlineStatus
} from '@/styles/Style_ChattingList';
import {
    ChatRoomContainer,
    R_ChatHeader,
    R_ProfileImage,
    UserInfo,
    R_Username,
    UserStatus,
    MessageList,
    MessageBubble,
    MessageTime,
    ChatInputContainer,
    ChatInput,
    SendButton,
} from '@/styles/Style_ChattingRoom';


const ChatList: React.FC = () => {
    return (
        <ChatListContainer>
            <PageWrapper>
                <PageDivider>
                    <ChatRoomList>
                        {/*
                        {chatRooms.map((room) => {
                            const otherParticipant = room.participants.find(
                                (p) => p.id !== 'current-user-id'
                            );
                            */}
                        {/* return ( */}
                        <ChatHeader>메시지</ChatHeader>
                            <ChatRoomItem
                                key="채팅방 ID"
                            >
                                <div style={{ position: 'relative' }}>
                                    <ProfileImage
                                        src="/src/resources/test-image-2.jpg"
                                        alt="상대방 사진"
                                    />
                                    <OnlineStatus isOnline={true} />
                                </div>
                                <ChatInfo>
                                    <ChatterHeader>
                                        <Username>
                                            상대방 이름
                                            {/*
                                            {room.unreadCount > 0 && (
                                                <UnreadBadge>{room.unreadCount}</UnreadBadge>
                                            )}
                                            */}
                                            <UnreadBadge> 45 (읽지 않은 채팅방수)</UnreadBadge>
                                        </Username>
                                        <Timestamp>
                                            12.05
                                        </Timestamp>
                                    </ChatterHeader>
                                    <LastMessage> 마지막 메세지 내용</LastMessage>
                                </ChatInfo>
                            </ChatRoomItem>
                    </ChatRoomList>
                    <ChatRoomContainer>
                        <R_ChatHeader>
                            <R_ProfileImage src="/src/resources/test-image-2.jpg" alt="상대방 이름" />
                            <UserInfo>
                                <R_Username>상대방 이름</R_Username>
                                <UserStatus>
                                    온라인 / 마지막 접속: 2025.03.25
                                </UserStatus>
                            </UserInfo>
                        </R_ChatHeader>
                        {/*
                        <MessageList ref={messageListRef}>
                            {messages.map((message) => {
                                const isMine = message.senderId === currentUser.id;
                                return (
                                    <div key={message.id}>
                                        <MessageBubble isMine={isMine}>
                                            {message.content}
                                        </MessageBubble>
                                        <MessageTime isMine={isMine}>
                                            {formatMessageTime(message.timestamp)}
                                        </MessageTime>
                                    </div>
                                );
                            })}
                        </MessageList>
                        */}
                        <MessageList>
                            <div>
                                <MessageBubble isMine={true}> 내가 메세지 </MessageBubble>
                                <MessageTime isMine={true}> 18:53 </MessageTime>
                            </div>
                            <div>
                                <MessageBubble isMine={false}> 상대방이 보낸 메세지 </MessageBubble>
                                <MessageTime isMine={false}> 18:55 </MessageTime>
                            </div>
                        </MessageList>
                        <ChatInputContainer>
                            <ChatInput
                                value="입력값"
                                placeholder="메시지를 입력하세요..."
                            />
                            <SendButton>
                                전송
                            </SendButton>
                        </ChatInputContainer>
                    </ChatRoomContainer>
                </PageDivider>
            </PageWrapper>
        </ChatListContainer>
    );
};

export default ChatList;