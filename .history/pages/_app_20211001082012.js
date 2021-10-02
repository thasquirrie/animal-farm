import '../styles/globals.css';
// import Header from '../components/Header.js';
import Header from '../components/Header';
console.log(Header);

function MyApp({ Component, pageProps }) {
  console.log({ Component, pageProps });
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
