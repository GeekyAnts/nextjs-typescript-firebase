import React from 'react';
import * as styles from '../styles/main.scss';
import Head from 'next/head';
import SignIn from '../src/components/Auth/SignIn';
import CheckAuth from '../src/components/Auth/CheckAuth';

class Signin extends React.Component<any, any> {
  static async getInitialProps(context) {
    let facts = {};
    //populate your PRE FETCHED data here ,
    //adjust src/components/Auth/Signin.tsx render() function accordingly
    await fetch('https://cat-fact.herokuapp.com/facts', {
      // mode: 'no-cors'
    })
      .then(response => response.json())
      .then(response => {
        facts = response;
      })
      .catch(err => {
        //
      });
    return { facts };
  }
  render() {
    return (
      <div>
        <Head>
          <title>Sign In</title>
        </Head>
        <div>
          <CheckAuth />
          <SignIn {...this.props} />
        </div>
      </div>
    );
  }
}

export default Signin;
