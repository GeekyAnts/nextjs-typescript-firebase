import store from '../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import ResetPassword from '../src/components/Auth/ResetPassword';
import Link from 'next/link';
import * as styles from '../styles/main.scss';
import CheckAuth from '../src/components/Auth/CheckAuth';
import NavBar from '../src/components/Navigation/NavBar';

export default class extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div
          className={[styles.container, styles['centered-container']].join(' ')}
        >
          <CheckAuth />
          <ResetPassword />
        </div>
      </div>
    );
  }
}
