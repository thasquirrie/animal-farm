import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
// console.log(Header);

function MyApp({ Component, pageProps }) {
  // console.log({ Component, pageProps });
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
