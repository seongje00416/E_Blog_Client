import { Container, PersonalContainer, NewsContainer, PostContainer, MyContainer } from '@/styles/Style_MainPage'
import { PostPreviewContainer, PostText, PostTitle } from "@/components/PostPriview.ts";

const MainPage = () => {


    return (
        <Container>
            <NewsContainer>
                NEWS
            </NewsContainer>
            <PersonalContainer>
                <PostContainer>
                    <PostPreviewContainer>
                        <PostTitle> 테스트 게시글 1 </PostTitle>
                        <PostText> 테스트 게시글입니다. </PostText>
                    </PostPreviewContainer>
                    <PostPreviewContainer>
                        <PostTitle> 테스트 게시글 2 </PostTitle>
                        <PostText> 테스트 게시글입니다. </PostText>
                    </PostPreviewContainer>
                </PostContainer>
                <MyContainer>
                    MY
                </MyContainer>
            </PersonalContainer>
        </Container>
    )
}

export default MainPage;