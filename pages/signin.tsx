import store from '../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import * as styles from '../styles/main.scss';
import Head from 'next/head';
import SignIn from '../src/components/Auth/SignIn';
import Link from 'next/link';
import CheckAuth from '../src/components/Auth/CheckAuth';

class Signin extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Head>
          <title>Sign In</title>
        </Head>
        <div
          className={[styles.container, styles['centered-container']].join(' ')}
        >
          <CheckAuth />
          <SignIn />
        </div>
      </div>
    );
  }
}

export default Signin;
