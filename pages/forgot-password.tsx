import store from '../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import ForgotPassword from '../src/components/Auth/ForgotPassword';
import Link from 'next/link';
import * as styles from '../styles/main.scss';

export default class extends React.Component {
  render() {
    return (
      <div>
        <div
          className={[styles.container, styles['centered-container']].join(' ')}
        >
          <ForgotPassword />
        </div>
      </div>
    );
  }
}
