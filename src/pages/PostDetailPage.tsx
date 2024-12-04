import React from 'react';
import {
    PostContainer,
    PostHeader,
    PostTitle,
    PostMeta,
    AuthorInfo,
    ProfileImage,
    PostContent,
    PostStats,
    CommentsSection, PageWrapper,
} from '@/styles/Style_PostDetailPage';

const PostDetailPage: React.FC = () => {
    return (
        <PostContainer>
            <PageWrapper>
                <PostHeader>
                    <PostTitle> 포스트 제목 </PostTitle>
                    <PostMeta>
                        <AuthorInfo>
                            <ProfileImage src="/src/resources/test-image-1.jpg" alt="프로필 이미지 alt" />
                            <span> 포스트 작성자 이름 </span>
                        </AuthorInfo>
                        <span>·</span>
                        <span> 작성 날짜 </span>
                        <span>·</span>
                        <span>조회: (조회수) </span>
                    </PostMeta>
                </PostHeader>
                {/*<PostContent dangerouslySetInnerHTML={{ __html: 포스트 내용 }} /> */}
                <PostContent dangerouslySetInnerHTML={{ __html: "포스트 내용을 작성" }}/>
                <PostStats>
                    <div>좋아요: (좋아요 수) </div>
                    <div>댓글: (댓글 수) </div>
                </PostStats>

                <CommentsSection>
                    <h3>댓글</h3>
                    { /* post.comments.map((comment) => (
                        <div key={comment.id}>{comment.content}</div>
                    )) */}
                    <div> 댓글 내용 </div>
                </CommentsSection>
            </PageWrapper>
        </PostContainer>
    );
};

export default PostDetailPage;