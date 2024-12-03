import React from 'react';
import {
    MainContainer,
    PostCard,
    PostHeader,
    PostAuthorImage,
    PostAuthorInfo,
    PostAuthorName,
    PostTime,
    PostContent,
    PostImage,
    MiniProfileContainer,
    MiniProfileImage,
    MiniProfileName,
    MiniProfileStats,
    StatContainer,
    StatNumber,
    StatLabel,
    PageWrapper,
    LeftSidebar,
    ProfileSection,
    ContentArea,
    PostActions,
    RightSidebar, RecommendationHeader
} from '@/styles/Style_MainPage';

const MiniProfile: React.FC = () => {
    return (
        <MiniProfileContainer>
            <MiniProfileImage
                src='/src/resources/test-image-1.jpg'
                alt='접속자 이름'
            />
            <MiniProfileName> 접속자 이름 </MiniProfileName>
            <MiniProfileStats>
                <StatContainer>
                    <StatNumber> 작성한 게시글 수 </StatNumber>
                    <StatLabel>게시물</StatLabel>
                </StatContainer>
                <StatContainer>
                    <StatNumber> 친구 수 </StatNumber>
                    <StatLabel> 친구수 </StatLabel>
                </StatContainer>
            </MiniProfileStats>
        </MiniProfileContainer>
    );
};

const PostComponent: React.FC = () => {
    return (
        <PostCard>
            <PostHeader>
                <PostAuthorImage src="/src/resources/test-image-1.jpg" alt="" />
                <PostAuthorInfo>
                    <PostAuthorName> 홍길동 ( 작성자 이름 ) </PostAuthorName>
                    <PostTime> 2024.12.03 13:10:52 </PostTime>
                </PostAuthorInfo>
            </PostHeader>
            <PostContent>
                게시글 내용. 여기다가 String을 할지 Text를 할지 고민을 좀 해봐야 할 것 같음.
            </PostContent>
            <PostImage src="/src/resources/test-image-2.jpg" />
            <PostActions>
                <button>댓글</button>
            </PostActions>
        </PostCard>
    );
};

const MainPage: React.FC = () => {
    return (
        <PageWrapper>
            <MainContainer>
                <LeftSidebar>
                    <ProfileSection>
                        <MiniProfile></MiniProfile>
                    </ProfileSection>
                </LeftSidebar>

                <ContentArea>
                    <PostComponent />
                </ContentArea>

                <RightSidebar>
                    <RecommendationHeader>추천 친구</RecommendationHeader>
                    추천 친구 목록
                </RightSidebar>
            </MainContainer>
        </PageWrapper>
    );
};

export default MainPage;