import React, { useContext } from 'react'

import  {projects} from '../constants/profile'

import { ContextApp } from '../context/ContextApp'

import { ContainerPortfolio, TextCard} from './styles'
import { Container,TitleSection, BtnSecondaryMd, BtnPrimaryLinkMd } from '../styles/CommonComponents'

const Portfolio = () => {
  const { portfolioHome } = useContext(ContextApp)

  return (
    <>
    <ContainerPortfolio id="Portafolio">
   <Container>
     <TitleSection secondary>Portafolio.</TitleSection>
   </Container>
   </ContainerPortfolio>

  <div className="row">
    <div className="col-md-12">
      <div className="card card-body bg-dark">
        <div className="row-12">
        {
         projects.map(({title,description, image, codigo, sitio, Alt}, i) =>(
           <div className="col-md-12 p-2" key={i}>
             <div className="card h-100">             
               <img src={`/${image}`} alt={Alt}/>
               <div className="card-body">
                 <TextCard>
                 <h3>{title}</h3>
                 <p>{description}</p>
                 </TextCard>
                 <BtnPrimaryLinkMd href={codigo} target="_blank">
                    Codigo
                 </BtnPrimaryLinkMd>
                 <BtnSecondaryMd href={sitio} target="_blank">
                    Visitar
                 </BtnSecondaryMd>
               </div>
             </div>
             </div>
         ))
       }
       </div>
      </div>
    </div>
  </div>
      
</>
  )
      }
export default Portfolio
