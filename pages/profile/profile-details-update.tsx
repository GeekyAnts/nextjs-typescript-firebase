import store from '../../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import NavBar from '../../src/components/Navigation/NavBar';
import * as styles from '../../styles/main.scss';
import ProfileDetailsUpdate from '../../src/components/Profile/ProfileDetailsUpdate';

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <div
          className={[styles.container, styles['centered-container']].join(' ')}
        >
          <ProfileDetailsUpdate />
        </div>
      </Provider>
    );
  }
}
