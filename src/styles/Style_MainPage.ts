import styled from 'styled-components';
import { colors } from './Style_Common';

export const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${colors.mainColor_4};
  padding: 20px;
`;

export const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 80vw;
  width: 100%;
  gap: 20px;
`;

export const LeftSidebar = styled.div`
  width: 280px;
  background-color: ${colors.mainColor_3};
  border-radius: 12px;
  height: fit-content;
  padding: 20px;
`;

export const ContentArea = styled.div`
  flex: 1;
  min-width: 0; // flex item이 너무 커지는 것을 방지
`;

export const RightSidebar = styled.div`
  width: 280px;
  background-color: ${colors.mainColor_3};
  border-radius: 12px;
  height: fit-content;
  padding: 20px;
`;

export const PostCard = styled.article`
  background-color: ${colors.mainColor_3};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const PostAuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const PostAuthorInfo = styled.div`
  flex: 1;
`;

export const PostAuthorName = styled.div`
  font-weight: bold;
  color: ${colors.mainColor_1};
`;

export const PostTime = styled.div`
  font-size: 14px;
  color: ${colors.mainColor_2};
`;

export const PostContent = styled.div`
  margin: 15px 0;
  color: ${colors.mainColor_1};
`;

export const PostImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin: 10px 0;
`;

export const PostActions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${colors.mainColor_3};

  button {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${colors.mainColor_2};
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${colors.mainColor_3};
    }
  }
`;

// 프로필 관련 스타일
export const ProfileSection = styled.div`
  text-align: center;
`;

export const ProfileName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.mainColor_1};
  margin-bottom: 10px;
`;

export const StatValue = styled.div`
  font-weight: bold;
  color: ${colors.mainColor_1};
`;

export const StatText = styled.div`
  font-size: 12px;
  color: ${colors.mainColor_2};
`;

export const RecommendationHeader = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.mainColor_1};
  margin-bottom: 15px;
`;


export const MiniProfileContainer = styled.div`
  text-align: center;
`;

export const MiniProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 16px auto;
  border: 3px solid ${colors.mainColor_2};
`;

export const MiniProfileName = styled.h2`
  font-weight: bold;
  margin-bottom: 8px;
  color: ${colors.mainColor_1};
`;

export const MiniProfileStats = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StatContainer = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-weight: bold;
  color: ${colors.mainColor_1};
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: ${colors.mainColor_2};
`;