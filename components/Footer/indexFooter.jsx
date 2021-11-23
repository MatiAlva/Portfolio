import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn} from 'react-icons/fa'

import scrollTop from '../helpers/scrollTop'

import Msg from '../constants/messages'

import { Container, ImageLogo, ImagePatterns } from '../styles/CommonComponents'
import { ContainerCopy, ContainerFooter, ContainerInfo, LinkExternal, SocialList, TextInfo } from './styles'

const Footer = () => (
  <ContainerFooter>
    <Container>
      <ContainerInfo>
        <div>
          <Link href="/" >
            <a onClick={scrollTop}>
              <ImageLogo  src="/favicon.png" width="100" height="40" alt="Logo"/>
            </a>
          </Link>
        </div>
        <TextInfo>
          <span>Trabajemos juntos | <LinkExternal href="mailto:matidev4@gmail.com"><u><b>Contáctame aquí</b></u></LinkExternal>.</span>
        </TextInfo>
      </ContainerInfo>
      <ContainerCopy>
        Desarrollado por Alvarez Matias.
        <SocialList>
          <li>
            <LinkExternal rel="noopener" href={Msg.Linkedin} target="_blank" title="Linkedin">
              <span>Red social de Linkedin</span>
              <FaLinkedinIn size="1.2rem"/>
            </LinkExternal>
          </li>
          <li>
            <LinkExternal rel="noopener" href={Msg.Github} target="_blank">
              <span>Red social de Github</span>
              <FaGithub size="1.2rem"/>
            </LinkExternal>
          </li>
        </SocialList>
      </ContainerCopy>
    </Container>
  </ContainerFooter>
)

export default Footer
