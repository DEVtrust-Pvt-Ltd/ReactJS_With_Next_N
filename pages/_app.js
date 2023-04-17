import { useEffect,useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { useStore } from 'store'
import Layout from 'components/Layout'
import VendorLayout from 'components/vendors/VendorLayout'
import theme from 'theme'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css';
import 'css/sb-admin-2.css';
import 'css/custom.css';
import 'css/vendor/fontawesome-free/css/all.min.css';

export default function MyApp (props) {
  const { Component, pageProps } = props
  const store = useStore(pageProps.state)
  const [isLoggedIn,setIsLoggedIn] = useState(false); 
  const title = 'Infinity Mediala'

  useEffect(()=>{
    let userToken = localStorage.getItem('userToken')?localStorage.getItem('userToken'):null
    if(userToken){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  })


  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content={title} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {
            isLoggedIn? 
              <VendorLayout>
                <Component {...pageProps} />
              </VendorLayout>
            :
              <Layout>
                <Component {...pageProps} />
              </Layout>
          }
        </Provider>
      </ThemeProvider>
    </>
  )
}
