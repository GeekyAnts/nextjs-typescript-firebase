import store from '../../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import NavBar from '../../src/components/Navigation/NavBar';
import ProfilePictureUpdate from '../../src/components/Profile/ProfilePictureUpdate';
import CheckAuth from '../../src/components/Auth/CheckAuth';

export default class extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <CheckAuth />
        <ProfilePictureUpdate />
      </div>
    );
  }
}
