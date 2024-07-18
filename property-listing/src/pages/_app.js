// src/pages/_app.js
import '../styles/globals.css'; // Move the import here
import React from 'react';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
