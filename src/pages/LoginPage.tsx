import React from 'react';
import { useNavigate } from "react-router-dom";
import {
    LoginContainer,
    LoginBox,
    Logo,
    Form,
    InputGroup,
    Label,
    Input,
    RememberMeContainer,
    Checkbox,
    LoginButton,
    Divider,
    SocialLoginButton,
    ForgotPassword,
} from '@/styles/Style_LoginPage';

const LoginPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <LoginContainer>
            <LoginBox>
                <Logo> E-Blog </Logo>
                <Form>
                    <InputGroup>
                        <Label htmlFor="email">이메일</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@email.com"
                            required
                        />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="password">비밀번호</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </InputGroup>

                    <RememberMeContainer>
                        <Checkbox
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                        />
                        <Label htmlFor="rememberMe">로그인 상태 유지</Label>
                    </RememberMeContainer>

                    <LoginButton type="submit">로그인</LoginButton>
                </Form>

                {/* 소셜 로그인 섹션 */}
                <Divider>또는</Divider>

                <SocialLoginButton
                    bgColor="#F9F7F7"
                    fontColor="black"
                    onClick = { () => navigate('/signUp')}
                >
                    이메일로 회원가입
                </SocialLoginButton>

                <SocialLoginButton
                    bgColor="#FFD717"
                    fontColor="black"
                >
                    카카오로 계속하기
                </SocialLoginButton>

                <SocialLoginButton
                    bgColor="#4285F4"
                    fontColor="white"
                >
                    Google로 계속하기
                </SocialLoginButton>

                <ForgotPassword href="/forgot-password">
                    비밀번호를 잊으셨나요?
                </ForgotPassword>
            </LoginBox>
        </LoginContainer>
    );
};

export default LoginPage;