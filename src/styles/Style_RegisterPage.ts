import styled from 'styled-components';

export const CreatePostContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;  
  background-color: #F9F7F7;
  padding-block: 20px;
  justify-content: center;
`;

export const PageWrapper = styled.div`
    display: flex;
    width: 80%;
`

export const LeftSidebar = styled.div`
  width: 100%;
  background-color: #DBE2EF;
  padding: 1.5rem;
  border-right: 1px solid #3F72AF;
  flex: 1;
`;

export const MainContent = styled.div`
  flex: 3;
  width: 100%;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const RightSidebar = styled.div`
  width: 100%;
  background-color: #DBE2EF;
  padding: 1.5rem;
  border-left: 1px solid #3F72AF;
  flex: 1;
`;

export const CategorySection = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  color: #112D4E;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #3F72AF;
  border-radius: 4px;
  background-color: white;
`;

export const TitleSection = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #DBE2EF;
  padding-bottom: 1rem;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1.25rem;
  border: 1px solid #DBE2EF;
  &:focus {
    outline: none;
    border-color: #3F72AF;
  }
`;

export const EditorWrapper = styled.div`
  border: 1px solid #DBE2EF;
  min-height: 500px;
`;

export const ContentTextarea = styled.textarea`
  width: 100%;
  min-height: 500px;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  resize: vertical;
  &:focus {
    outline: none;
  }
`;

export const ToolbarSection = styled.div`
  background-color: #F9F7F7;
  border: 1px solid #DBE2EF;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ToolButton = styled.button`
  padding: 0.5rem;
  background: white;
  border: 1px solid #DBE2EF;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #DBE2EF;
  }
`;

export const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;