import styled from "styled-components";

export const Container = styled.div`
    max-width: 1160px;
    margin: 0 auto;
`;

export const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const CardList = styled.div`
    display:flex;
    padding: 20px;
    width: 33.33%;
`

export const Box = styled.div`
    background-color: red;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 7px 0px blue;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px 20px;
    flex-grow: 1;
`


export const ImageCard1 = styled.div`
    border-radius: 15px 15px 0px 0px;
    clip-path: polygon(0 0, 100% 0, 100% 87%, 0% 100%);
`
export const H2Content = styled.h2`
    font-size: 26px;
    line-height: 46px;
    font-weight: 500;
    margin-bottom: 20px;
`

export const PContent = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
    flex-grow: 1;
`

export const LinkCard = styled.a`
    display: inline-block;
    text-decoration: none;
    border: 2px solid #fff;
    padding: 3px 25px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 32px;
    color: #fff;
    letter-spacing: 1px;
    width: 111px;
    margin-bottom: 20px;
    transition: .4s ease-in;

    &:hover{
        background-color: yellow;
        color: black;
        border: 2px solid yelow;
    }
`


export const ImageCard2 = styled.image`
border-radius: 15px 15px 0px 0px;
    clip-path: polygon(0 0, 100% 0, 100% 87%, 0% 100%);
`




