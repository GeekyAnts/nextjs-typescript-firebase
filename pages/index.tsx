import store from '../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import * as styles from '../styles/main.scss';
import Head from 'next/head';
import CheckAuth from '../src/components/Auth/CheckAuth';
import Link from 'next/link';
import Router from 'next/router';
import { MoonLoader } from 'react-spinners';

// import { connect } from 'react-redux';

class Index extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div
          className={[styles.container, styles['centered-container']].join(' ')}
        >
          <CheckAuth />
          <MoonLoader sizeUnit={'px'} size={300} color={'#123abc'} />
        </div>
      </div>
    );
  }
}

export default Index;
