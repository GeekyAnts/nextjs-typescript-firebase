import store from '../../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import NavBar from '../../src/components/Navigation/NavBar';
import * as styles from '../../styles/main.scss';
import ProfileDetailsUpdate from '../../src/components/Profile/ProfileDetailsUpdate';
import CheckAuth from '../../src/components/Auth/CheckAuth';

export default class extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div
          className={[styles.container, styles['centered-container']].join(' ')}
        >
          <CheckAuth />
          <ProfileDetailsUpdate />
        </div>
      </div>
    );
  }
}
