import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
 
  render() {
    const serverPath = process.env.HOST;
    return (
      <Html>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="keywords" content="" />
            <meta name="description" content="" />
            <meta name="author" content="Biogx" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Biogx</title>
            <link rel="shortcut icon" href="images/favicon.ico" />
            <link href={`${serverPath}css/bootstrap.min.css`} rel="stylesheet" type="text/css" />
            {/*}<link href="https://fonts.googleapis.com/css2?family=Livvic:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet"/>{*/}

            <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900' rel="stylesheet" type="text/css" ></link>
            {/*}<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/> {*/}
            <link href={`${serverPath}css/animate.css`} rel="stylesheet" type="text/css" />
            <link href={`${serverPath}css/line-awesome.min.css`} rel="stylesheet" type="text/css" />
            <link href={`${serverPath}css/magnific-popup.css`} rel="stylesheet" type="text/css" />
            <link href={`${serverPath}css/owl.carousel.css`} rel="stylesheet" type="text/css" />
            <link href={`${serverPath}css/lightslider.min.css`} rel="stylesheet" type="text/css" />
            <link href={`${serverPath}css/base.css`} rel="stylesheet" type="text/css" />
            <link href={`${serverPath}css/shortcodes.css`} rel="stylesheet" type="text/css" />
            <link href={`${serverPath}css/spacing.css`} rel="stylesheet" type="text/css" />
            <link href={`${serverPath}css/style.css`} rel="stylesheet" type="text/css" />

            <link rel="stylesheet" type="text/css" href={`${serverPath}css/style.css`}/> 
            <link rel="stylesheet" type="text/css" href={`${serverPath}css/file-manager.css`}/>
        </Head>
        
        <body>
          <Main />
          <NextScript />
          {/*}<script type="text/javascript"  src="js/theme.js" async ></script>
          <script type="text/javascript" src="js/theme-plugin.js" async></script>
    <script type="text/javascript" src="js/theme-script.js" async></script>
      <script type="text/javascript" src="./js/allscript.js" />
    {*/}
         
         <script type="text/javascript" src={`${serverPath}js/allscript.js`}  async/>
         
         

        </body>
         
      </Html>
    )
  }
}

export default MyDocument