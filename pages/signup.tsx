import store from '../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import SignUp from '../src/components/Auth/SignUp';
import Link from 'next/link';
import * as styles from '../styles/main.scss';
// import { connect } from 'react-redux';

export default class extends React.Component {
  render() {
    return (
      <div
        className={[styles.container, styles['centered-container']].join(' ')}
      >
        <SignUp />
      </div>
    );
  }
}
