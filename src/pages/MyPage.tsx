import { Container, ContentContainer, BodyContainer, HeadContainer, MenuContainer, Banner, BannerTitle } from "@/styles/Style_MyPage.ts";

const MyPage = () => {
    return (
        <Container>
            <HeadContainer>
                <Banner>
                    <BannerTitle> TITLE </BannerTitle>
                </Banner>
            </HeadContainer>
            <BodyContainer>
                <MenuContainer>

                </MenuContainer>
                <ContentContainer>

                </ContentContainer>
            </BodyContainer>
        </Container>
    )
}

export default MyPage;