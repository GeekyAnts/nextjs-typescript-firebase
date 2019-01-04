import React from 'react';
import store from '../src/redux/store';
import { fetchUser } from '../src/redux/actions';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    let facts = {};
    await fetch('https://cat-fact.herokuapp.com/facts')
      .then(response => response.json())
      .then(response => {
        facts = response;
      });
    return { pageProps, facts };
  }

  componentDidMount() {
    fetchUser()(store.dispatch);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}
