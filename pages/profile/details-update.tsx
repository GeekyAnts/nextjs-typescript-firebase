import React from 'react';

import * as styles from '../../styles/main.scss';

import NavBar from '../../src/components/Navigation/NavBar';
import CheckAuth from '../../src/components/Auth/CheckAuth';
import ProfileDetailsUpdate from '../../src/components/Profile/ProfileDetailsUpdate';

export default class extends React.Component {
  render() {
    return (
      <div>
        <CheckAuth>
          <NavBar />
          <div
            className={[styles.container, styles['centered-container']].join(
              ' '
            )}
          >
            <ProfileDetailsUpdate />
          </div>
        </CheckAuth>
      </div>
    );
  }
}
