import React from 'react';
import {
    SignupContainer,
    SignupBox,
    Title,
    Form,
    InputGroup,
    Label,
    Input,
    Select,
    AgreementSection,
    AgreementTitle,
    CheckboxGroup,
    Checkbox,
    AgreementText,
    SubmitButton,
} from '@/styles/Style_SignUpPage';

const SignUpPage: React.FC = () => {
    return (
        <SignupContainer>
            <SignupBox>
                <Title>회원가입</Title>

                <Form>
                    {/* 기본 정보 입력 */}
                    <InputGroup>
                        <Label htmlFor="email">이메일 *</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@email.com"
                        />
                        { /* errors.email && <ErrorMessage>{errors.email}</ErrorMessage> */ }
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="password">비밀번호 *</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="8자 이상 입력해주세요"
                        />
                        { /* errors.password && <ErrorMessage>{errors.password}</ErrorMessage> */ }
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="passwordConfirm">비밀번호 확인 *</Label>
                        <Input
                            type="password"
                            id="passwordConfirm"
                            name="passwordConfirm"
                            placeholder="비밀번호를 다시 입력해주세요"
                        />
                        { /* errors.passwordConfirm && <ErrorMessage>{errors.passwordConfirm}</ErrorMessage> */ }
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="nickname">닉네임 *</Label>
                        <Input
                            type="text"
                            id="nickname"
                            name="nickname"
                            placeholder="사용하실 닉네임을 입력해주세요"
                        />
                        { /* errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage> */ }
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="name">이름 *</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="이름을 입력해주세요"
                        />
                        { /* errors.name && <ErrorMessage>{errors.name}</ErrorMessage> */ }
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="birthdate">생년월일 *</Label>
                        <Input
                            type="date"
                            id="birthdate"
                            name="birthdate"
                        />
                        { /* errors.birthdate && <ErrorMessage>{errors.birthdate}</ErrorMessage> */ }
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="gender">성별</Label>
                        <Select
                            id="gender"
                            name="gender"
                        >
                            <option value="male">남성</option>
                            <option value="female">여성</option>
                        </Select>
                    </InputGroup>

                    {/* 약관 동의 섹션 */}
                    <AgreementSection>
                        <AgreementTitle>약관 동의</AgreementTitle>

                        <CheckboxGroup>
                            <Checkbox
                                type="checkbox"
                                id="agreeTerms"
                                name="agreeTerms"
                            />
                            <Label htmlFor="agreeTerms">
                                <AgreementText>이용약관 동의 (필수)</AgreementText>
                            </Label>
                        </CheckboxGroup>

                        <CheckboxGroup>
                            <Checkbox
                                type="checkbox"
                                id="agreePrivacy"
                                name="agreePrivacy"
                            />
                            <Label htmlFor="agreePrivacy">
                                <AgreementText>개인정보 처리방침 동의 (필수)</AgreementText>
                            </Label>
                        </CheckboxGroup>

                        <CheckboxGroup>
                            <Checkbox
                                type="checkbox"
                                id="agreeMarketing"
                                name="agreeMarketing"
                            />
                            <Label htmlFor="agreeMarketing">
                                <AgreementText>마케팅 정보 수신 동의 (선택)</AgreementText>
                            </Label>
                        </CheckboxGroup>
                    </AgreementSection>

                    <SubmitButton
                        type="submit"
                    >
                        가입하기
                    </SubmitButton>
                </Form>
            </SignupBox>
        </SignupContainer>
    );
};

export default SignUpPage;