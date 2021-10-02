import '../styles/globals.css';
import Header from '../components/Header.js';

function MyApp({ Component, pageProps }) {
  console.log({ Component, pageProps });
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
