import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
  } from 'next/document'
   
  class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <Head />
          <body className='w-10/12 m-auto'>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
   
  export default MyDocument