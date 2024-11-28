import styled from 'styled-components'
import { colors} from "@/styles/Style_Common";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: ${colors.mainColor_4};
`

export const NewsContainer = styled.div`
    width: 100%;
    background-color: white;
`

export const PersonalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const PostContainer = styled.div`
    width: 100%;
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MyContainer = styled.div`
    width: 100%;
    flex: 1;
    border: solid 1px lightgray;
    border-radius: 3px;
    margin: 10px;
    background-color: ${colors.mainColor_3};
`