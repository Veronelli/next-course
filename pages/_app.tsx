import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import Layout from 'components/Layout'
import "globals.css"

type AppOwnProps = { example: string }
 
export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}