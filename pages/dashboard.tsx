import store from '../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import Link from 'next/link';
import NavBar from '../src/components/Navigation/NavBar';

export default class extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{ paddingTop: '20%', width: 'fit-content', margin: 'auto' }}
        >
          <h1>Welcome To The DashBoard</h1>
        </div>
      </div>
    );
  }
}
