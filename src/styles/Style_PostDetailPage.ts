import styled from 'styled-components';
import { colors } from './Style_Common';

export const PostContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.mainColor_4};
`;

export const PageWrapper = styled.div`
    width: 75%;
    max-height: 80vh;
    padding: 24px;
    background-color: ${colors.mainColor_3};
`

export const PostHeader = styled.div`
  margin-bottom: 24px;
`;

export const PostTitle = styled.h1`
  color: ${colors.mainColor_1};
  font-size: 2.5rem;
  margin-bottom: 16px;
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${colors.mainColor_2};
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const PostContent = styled.div`
  line-height: 1.8;
  color: ${colors.mainColor_1};
  margin: 24px 0;
`;

export const PostStats = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px 0;
  border-top: 1px solid ${colors.mainColor_3};
  border-bottom: 1px solid ${colors.mainColor_3};
`;

export const CommentsSection = styled.div`
  margin-top: 32px;
`;