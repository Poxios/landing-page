import "bootstrap/dist/css/bootstrap.css";
import "../common/assets/css/styles.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
