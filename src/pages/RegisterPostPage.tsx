import {
    CategorySection, CheckboxLabel, ContentTextarea,
    CreatePostContainer, EditorWrapper,
    LeftSidebar,
    MainContent, RightSidebar,
    SectionTitle,
    Select, TitleInput, TitleSection, ToolbarSection, ToolButton,
    PageWrapper
} from '@/styles/Style_RegisterPage';

const RegisterPostPage: React.FC = () => {
    return (
        <CreatePostContainer>
            <PageWrapper>
                <LeftSidebar>
                    <CategorySection>
                        <SectionTitle>카테고리</SectionTitle>
                        <Select
                            value={"포스트 카테고리"}
                        >
                            <option value="">카테고리 선택</option>
                            <option value="daily">일상</option>
                            <option value="tech">기술</option>
                            <option value="travel">여행</option>
                            <option value="food">음식</option>
                        </Select>
                    </CategorySection>

                    <CategorySection>
                        <SectionTitle>공개 설정</SectionTitle>
                        <Select
                            value={"포스트 공개여부"}
                        >
                            <option value="public">전체 공개</option>
                            <option value="friends">친구 공개</option>
                            <option value="private">비공개</option>
                        </Select>
                    </CategorySection>
                </LeftSidebar>

                <MainContent>
                    <TitleSection>
                        <TitleInput
                            type="text"
                            placeholder="제목을 입력하세요"
                            value={"포스트 제목"}
                        />
                    </TitleSection>

                    <ToolbarSection>
                        <ToolButton>B</ToolButton>
                        <ToolButton>I</ToolButton>
                        <ToolButton>U</ToolButton>
                        <ToolButton>이미지</ToolButton>
                        <ToolButton>동영상</ToolButton>
                        <ToolButton>링크</ToolButton>
                    </ToolbarSection>

                    <EditorWrapper>
                        <ContentTextarea
                            placeholder="내용을 입력하세요"
                            value={"포스트 내용"}
                        />
                    </EditorWrapper>
                </MainContent>

                <RightSidebar>
                    <CategorySection>
                        <SectionTitle>설정</SectionTitle>
                        <CheckboxLabel>
                            <input
                                type="checkbox"
                            />
                            {' '}댓글 허용
                        </CheckboxLabel>
                    </CategorySection>
                </RightSidebar>
            </PageWrapper>
        </CreatePostContainer>
    );
};

export default RegisterPostPage