import '../static/style.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/swiper.min.css';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/Layout';
import Footer from '../components/footer';
// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  console.log('进入主进程；；；；');
  // console.log(Component, 'Component');
  // console.log(pageProps, 'pagePropss');

  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
