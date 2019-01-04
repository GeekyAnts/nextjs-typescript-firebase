import React from 'react';

import NavBar from '../../src/components/Navigation/NavBar';
import CheckAuth from '../../src/components/Auth/CheckAuth';
import ProfilePictureUpdate from '../../src/components/Profile/ProfilePictureUpdate';

export default class extends React.Component {
  render() {
    return (
      <div>
        <CheckAuth>
          <NavBar />
          <ProfilePictureUpdate />
        </CheckAuth>
      </div>
    );
  }
}
