import React from 'react'
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa'
import { IoArrowDownCircleSharp } from 'react-icons/io5'
import Typed from 'react-typed'

import Msg from '../constants/messages'

import useScrollInto from '../hooks/useScrollInto'
import useWindowSize from '../hooks/useWindowSize'

import { CaptionBanner, ContainerBanner, SubtitleBanner, TitleBanner,  SocialBanner, LinkExternalBanner, ArrowButton } from './styles'
import { Container, ImagePatterns } from '../styles/CommonComponents'

const BannerMain = () => {
  const handleScrollDown = useScrollInto(Msg.About)
  const [_ , height] = useWindowSize()

  return (
    <ContainerBanner height={height}>
      <Container>
        <SubtitleBanner>¡Hola! Me llamo,</SubtitleBanner>
        <TitleBanner>Alvarez Matias</TitleBanner>
        <CaptionBanner>
          <Typed
            strings={['Desarrollador Front End', 'Técnico Programador']}
            typeSpeed={80}
            backSpeed={80}
            loop/>
        </CaptionBanner>
        <SocialBanner>
          <LinkExternalBanner rel="noopener" href={Msg.Linkedin} target="_blank">
            <span>Red social de Linkedin</span>
            <FaLinkedinIn size="1.5rem"/>
          </LinkExternalBanner>
          <LinkExternalBanner rel="noopener" href={Msg.Github} target="_blank">
            <span>Red social de Github</span>
            <FaGithub size="1.5rem"/>
          </LinkExternalBanner>
        </SocialBanner>
      </Container>
      <ArrowButton  aria-label="Botón para bajar">
        <IoArrowDownCircleSharp size="4rem"/>
      </ArrowButton>
    </ContainerBanner>
  )
}

export default BannerMain
