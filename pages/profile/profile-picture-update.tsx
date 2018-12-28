import store from '../../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import NavBar from '../../src/components/Navigation/NavBar';
import ProfilePictureUpdate from '../../src/components/Profile/ProfilePictureUpdate';

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <ProfilePictureUpdate />
      </Provider>
    );
  }
}
