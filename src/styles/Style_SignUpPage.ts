import styled from 'styled-components';
import { colors } from '@/styles/Style_Common.ts';

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    width: 100vw;
  min-height: 100vh;
  padding: 32px;
  background-color: ${colors.mainColor_4};
`;

export const SignupBox = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 48px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: ${colors.mainColor_1};
  text-align: center;
  font-size: 24px;
  margin-bottom: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
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
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colors.mainColor_2};
  }

  &:invalid {
    border-color: #ff4d4d;
  }
`;

export const Select = styled.select`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${colors.mainColor_3};
    border-radius: 4px;
    font-size: 14px;
    color: ${colors.mainColor_1};
    background-color: white;
    -webkit-appearance: none;  // 브라우저 기본 스타일 제거
    -moz-appearance: none;     // 브라우저 기본 스타일 제거
    appearance: none;          // 브라우저 기본 스타일 제거
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;
    padding-left: 12px;
    padding-block: 12px;
    padding-right: 40px;  // 화살표 아이콘을 위한 여백
    height: 44px;  // Input 높이와 동일하게 설정

    &:focus {
        outline: none;
        border-color: ${colors.mainColor_2};
    }
`;

export const ErrorMessage = styled.span`
  color: #ff4d4d;
  font-size: 12px;
  margin-top: 4px;
`;

export const AgreementSection = styled.div`
  margin-top: 24px;
  padding: 16px;
  background-color: ${colors.mainColor_3}20;
  border-radius: 4px;
`;

export const AgreementTitle = styled.h3`
  color: ${colors.mainColor_1};
  font-size: 16px;
  margin-bottom: 16px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Checkbox = styled.input`
  accent-color: ${colors.mainColor_2};
`;

export const AgreementText = styled.span`
  font-size: 14px;
  color: ${colors.mainColor_1};
`;

export const SubmitButton = styled.button`
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
  margin-top: 24px;

  &:hover {
    background-color: ${colors.mainColor_1};
  }

  &:disabled {
    background-color: ${colors.mainColor_3};
    cursor: not-allowed;
  }
`;