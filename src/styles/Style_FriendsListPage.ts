import styled from 'styled-components';
import { colors } from './Style_Common';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 15px;
  background-color: ${colors.mainColor_4};
`;

export const PageWrapper = styled.div`
    width: 80%;
    background-color: ${colors.mainColor_3};
    padding: 24px;
`

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: ${colors.mainColor_1};
  font-size: 24px;
  margin-bottom: 16px;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${colors.mainColor_3};
  background-color: white;
  font-size: 16px;
  color: ${colors.mainColor_1};

  &:focus {
    outline: none;
    border-color: ${colors.mainColor_2};
  }

  &::placeholder {
    color: ${colors.mainColor_3};
  }
`;

export const FriendsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const FriendCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const FriendName = styled.h3`
  color: ${colors.mainColor_1};
  font-size: 16px;
  margin-bottom: 8px;
`;

export const MutualFriends = styled.p`
  color: ${colors.mainColor_2};
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Location = styled.p`
  color: ${colors.mainColor_2};
  font-size: 14px;
`;

export const OnlineStatus = styled.div<{ isOnline: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.isOnline ? '#34D399' : colors.mainColor_3};
  margin-right: 8px;
  display: inline-block;
`;