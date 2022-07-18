import { Html, Main, NextScript, Head } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        {/* <title>Agency - Start Bootstrap Theme</title> */}
        {/* <!-- Favicon--> */}
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* <!-- Font Awesome icons (free version)--> */}
        <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"></Script>
        {/* <!-- Google fonts--> */}
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=optional"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700&display=optional"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}