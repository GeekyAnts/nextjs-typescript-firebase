import React from 'react';
import SignUp from '../src/components/Auth/SignUp';
import * as styles from '../styles/main.scss';

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
