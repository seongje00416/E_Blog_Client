import styled from 'styled-components';
import { colors } from './Style_Common';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${colors.mainColor_4};
    width: 100vw;
`;

export const LoginBox = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  color: ${colors.mainColor_1};
  text-align: center;
  font-size: 24px;
  margin-bottom: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: ${colors.mainColor_1};
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${colors.mainColor_3};
  border-radius: 4px;
  font-size: 14px;
  color: ${colors.mainColor_1};

  &:focus {
    outline: none;
    border-color: ${colors.mainColor_2};
  }
`;

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Checkbox = styled.input`
  accent-color: ${colors.mainColor_2};
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${colors.mainColor_2};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.mainColor_1};
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${colors.mainColor_3};
  }
`;

export const SocialLoginButton = styled.button<{ bgColor: string, fontColor: string }>`
  width: 100%;
  padding: 12px;
  background-color: ${props => props.bgColor};
  color: ${props => props.fontColor};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const ForgotPassword = styled.a`
  color: ${colors.mainColor_2};
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  margin-top: 16px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;
