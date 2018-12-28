import store from '../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import ResetPassword from '../src/components/Auth/ResetPassword';
import Link from 'next/link';
import * as styles from '../styles/main.scss';

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div
          className={[styles.container, styles['centered-container']].join(' ')}
        >
          <ResetPassword />
        </div>
      </Provider>
    );
  }
}
