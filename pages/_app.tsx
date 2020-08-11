import React from 'react';
// config
import '../config/axios.config';
// styles
import '../styles/App.scss';

function MyApp({Component, pageProps, err}) {
  const Layout = Component.Layout || React.Fragment;
  const modifiedPageProps = {...pageProps, err};

  return (
    <>
      <Layout>
        <Component {...modifiedPageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
