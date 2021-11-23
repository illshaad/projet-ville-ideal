import "../styles/globals.css";
import { ConsentCookieProvider } from "../context/context";
function MyApp({ Component, pageProps }) {
  return (
    <ConsentCookieProvider>
      <Component {...pageProps} />
    </ConsentCookieProvider>
  );
}

export default MyApp;
