import React, { useState } from 'react';
import {
    Container,
    Header,
    Title,
    SearchContainer,
    SearchInput,
    FriendsGrid,
    FriendCard,
    ProfileImage,
    FriendName, PageWrapper,
} from '@/styles/Style_FriendsListPage';

const FriendsListPage: React.FC = () => {
    const [searchTerm, ] = useState('');

    return (
        <Container>
            <PageWrapper>
                <Header>
                    <Title>친구 목록</Title>
                </Header>

                <SearchContainer>
                    <SearchInput
                        type="text"
                        placeholder="친구 검색..."
                        value={searchTerm}
                    />
                </SearchContainer>

                <FriendsGrid>
                    {/*
                    {friends.map((friend) => (
                        <FriendCard key={friend.id}>
                            <ProfileImage src={friend.profileImage} alt={friend.name} />
                            <FriendName>
                                <OnlineStatus isOnline={friend.isOnline} />
                                {friend.name}
                            </FriendName>
                            <MutualFriends>함께 아는 친구 {friend.mutualFriends}명</MutualFriends>
                            {friend.location && <Location>{friend.location}</Location>}
                        </FriendCard>
                    ))}
                    */}
                    <FriendCard>
                        <ProfileImage src="/src/resources/test-image-2.jpg" alt="친구 이름" />
                        <FriendName>
                            친구 이름
                        </FriendName>
                    </FriendCard>
                </FriendsGrid>
            </PageWrapper>
        </Container>
    );
};

export default FriendsListPage;