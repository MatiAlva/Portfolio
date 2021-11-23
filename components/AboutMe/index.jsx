import React, { useContext } from 'react'
import { MdEmail, MdCloudDownload } from 'react-icons/md'

import TabBar from './AboutContext'
import Tab from './Tab'
import TabPanel from './TabPanel'

import { ContextApp } from '../context/ContextApp'
import Msg from '../constants/messages'


import { BtnPrimaryLinkMd, BtnSecondaryMd, Container, Image, ImagePatterns, TitleSection } from '../styles/CommonComponents'
import { ButtonContainer, CompanyName, ContainerAbout, Link, PhotoImg, PhotoMeBg, PhotoMeContainer, SkillsItem, SkillsList, StudiesItem, StudiesList, TabList, TabPanelItem } from './styles'

const AboutMe = () => {
  return (
    <ContainerAbout id="SobreMi">
      <Container>
        <PhotoMeContainer>
          <PhotoMeBg>
            <PhotoImg 
              src='/miFoto.png'
              alt={'Alvarez Matias'} 
              width={400} 
              height={536}/>
          </PhotoMeBg>
        </PhotoMeContainer>
        <div>
          <TitleSection primary>Sobre mi.</TitleSection>
          <TabBar tab="Perfil">
            <TabList>
              {Msg.AboutMe?.map(about => (
                <Tab tabTitle={about} key={about}>{about}</Tab>
              ))}
            </TabList>
            <div>
              <TabPanel whenActive="Perfil">
                <TabPanelItem>
                  <p>
                    💙 <b>Desarrollador Front-End</b> especializado en <u>React JS. </u> 
                    <b> y Técnico Programador </b> 
                    Creación y desarrollo de productos digitales innovadores 
                    centrados en el usuario.
                    Estoy en constante aprendizaje adquiriendo nuevos conocimientos y herramientas. 
                  </p>
                  <ButtonContainer>
                    <BtnPrimaryLinkMd href="mailto:matidev4@gmail.com" fullWidthSm>
                      Escríbeme <MdEmail/>
                    </BtnPrimaryLinkMd>
                    <BtnSecondaryMd href="/Alvarez-Matias-Currículum.pdf" download>
                      Descargar CV <MdCloudDownload/>
                    </BtnSecondaryMd>
                  </ButtonContainer>
                </TabPanelItem>
              </TabPanel>
            </div>
          </TabBar>
        </div>
      </Container>
    </ContainerAbout>
  )
}

export default AboutMe


