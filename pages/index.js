import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DataSeo from '../components/constants/dataSeo'
import Index from '../components/Header/index'
import IndexBanner from '../components/Banner/indexBanner'
import AboutMe from '../components/AboutMe'
import GenerateTitlePageSEO from '../components/helpers/SeoPerPage'
import IndexFooter from '../components/Footer/indexFooter'
import IndexPortfaolio from '../components/Portafolio/indexPortafolio'

export default function Home() {
  return (
   <>
   {/* <Head>
   <link rel="icon" href="/favicon.ico" />
   </Head> */}
   <GenerateTitlePageSEO
       title={DataSeo.HomeTitle}
    />
     <Index />
     <IndexBanner />
     <AboutMe/>
     <IndexPortfaolio />
     <IndexFooter />
    </>
  )
}
