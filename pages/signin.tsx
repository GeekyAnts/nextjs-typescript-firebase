import React from 'react';
import * as styles from '../styles/main.scss';
import Head from 'next/head';
import SignIn from '../src/components/Auth/SignIn';
import CheckAuth from '../src/components/Auth/CheckAuth';

class Signin extends React.Component<any, any> {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    let facts = {};
    await fetch('https://cat-fact.herokuapp.com/facts', {
      mode: 'no-cors'
    })
      .then(response => response.json())
      .then(response => {
        facts = response;
      })
      .catch(err => {
        //
      });
    return { ...pageProps, facts };
  }
  render() {
    return (
      <div>
        <Head>
          <title>Sign In</title>
        </Head>
        <div
        // className={[styles.container, styles['centered-container']].join(' ')}
        >
          <CheckAuth />
          <SignIn />
        </div>
      </div>
    );
  }
}

export default Signin;
