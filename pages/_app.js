import { ThemeProvider } from 'styled-components'

 import Layout from '../components/Layout/indexLayout'

import Theme from '../components/constants/uiTheme'

import App from '../components/context/ContextApp'

import GlobalStyle from '../components/styles/GlobalStyles'
import 'bootswatch/dist/cosmo/bootstrap.min.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <App initialValues={pageProps}>
      <ThemeProvider theme={Theme}>
         <Layout> 
          <GlobalStyle />
          <Component {...pageProps} />
         </Layout> 
      </ThemeProvider>
    </App>
    </>
  )
}

export default MyApp
