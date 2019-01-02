import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import * as styles from '../../../styles/main.scss';

class NavBar extends Component <{} , {}> {
  state = {
    dropdownOpen: false
  };
  render() {
    return (
      <nav
        className={[
          styles.navbar,
          styles['navbar-dark'],
          styles['bg-dark']
        ].join(' ')}
      >
        <span className="navbar-brand">
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </span>

        <div className={styles['navbar-nav']}>
          <div className={[styles['nav-item'], styles['dropdown']].join(' ')}>
            <span
              className={[styles['nav-link'], styles['dropdown-toggle']].join(
                ' '
              )}
              id="navbarDropdownMenuLink"
              role="button"
              tabIndex={0}
              onClick={() =>
                this.setState({ dropdownOpen: !this.state.dropdownOpen })
              }
            >
              Profile
            </span>
            <div
              className={[
                styles['dropdown-menu'],
                styles['dropdown-menu-right'],
                styles['dropdown-default']
              ].join(' ')}
              style={
                this.state.dropdownOpen
                  ? { display: 'block', position: 'absolute' }
                  : {}
              }
            >
              <span
                className={styles['dropdown-item']}
                onClick={() => Router.push('/profile/profile-picture-update')}
              >
                Change Profile Picture
              </span>
              <span
                className={styles['dropdown-item']}
                onClick={() => Router.push('/profile/profile-details-update')}
              >
                Update Profile Details
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
