import styled from "styled-components";
import { Image, ImagePatterns } from "../styles/CommonComponents";

export const ContainerPortfolio = styled.section`
  margin: 50px 0 0;
  padding: 70px 0 0;
  position: relative;
  ${ImagePatterns} {
    position: absolute;
    top: 20%;
    right: 0;
    z-index: -1;
  }
  @media(max-width: 767px) {
    margin: 0;
    padding: 70px 0 0;
  }
`

export const ContainerProject = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 0.5rem));
  grid-gap: 1rem;
  list-style: none;
  @media(max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
`

export const ProjectItemText = styled.div`
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.palette.background} ;
  backface-visibility: hidden;
  transition: transform 0.3s linear;
  transform: rotateY(180deg);
  @media(max-width: 959px) {
    position: static;
    background: transparent;
    transform: rotateY(0);
    text-align: left;
    padding: 0 1rem 2rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary};
`

export const ProjectItem = styled.li`
  background-color: ${({ theme }) => theme.palette.background};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  height: 100%;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  box-sizing: border-box;
  width: 100%;
  ${Image} {
    object-fit: contain;
    backface-visibility: hidden;
    background-color: transparent;
    box-shadow: none;
    box-sizing: border-box;
    padding: 1rem;
    height: 100%;
    @media(max-width: 959px) {
      height: auto;
      padding: 0 0 1rem;
    }
    transform: rotateY(0deg);
    transition: all 0.3s linear;
    width: 100%;
    z-index: 2;
  }
  @media (min-width: 960px) {
    background-color: transparent;
    box-shadow: none;

    ${Image} {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      background-color: ${({ theme }) => theme.palette.bgGradientMain};
    }
    &:hover {
      z-index: 2;
      ${Image} {
        transform: rotateY(180deg);
        background-color: transparent;
        box-shadow: none;
      }
      ${ProjectItemText} {
        transform: rotateY(360deg);
      }
    }
  }

`

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.md};
  margin-top: ${({ theme }) => theme.size.md};
  width: 100%;
  justify-content: center;
  @media(max-width: 959px) {
    flex-direction: column;
    a {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`

export const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  margin: 1rem 0;
  width: 100%;
  @media (max-width: 959px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 1.5rem 0;
  }
`

export const StackItem = styled.li`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  img {
    margin-right: 0.5rem;
  }
  @media(max-width: 1150px) {
    font-size: 0.775rem;
  }
  @media(max-width: 960px) {
    font-size: 1rem;
  }
`

export const  Overflow = styled.div`
  height: 50%;
  overflow: hidden;
`

export const imgTop = styled.image`
  transform: scale(1);
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.8);
  }
`


export const TextCard = styled.div`
  color: black;
`
