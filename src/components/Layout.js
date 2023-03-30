import React from 'react';
import Head from 'next/head';
// import Header from './Header';
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Summary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;