import React, { Component } from 'react';
import Router from 'next/router';
import * as styles from '../../../styles/main.scss';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav
        className={[
          styles.navbar,
          styles['navbar-dark'],
          styles['bg-dark']
        ].join(' ')}
      >
        <a class="navbar-brand" href="/dashboard">
          Dashboard
        </a>

        <div className={styles['navbar-nav']}>
          <div className={[styles['nav-item'], styles['dropdown']].join(' ')}>
            <span
              className={[styles['nav-link'], styles['dropdown-toggle']].join(
                ' '
              )}
              id="navbarDropdownMenuLink"
              role="button"
              tabIndex={0}
              dataToggle="dropdown"
              ariaHaspopup="true"
              ariaExpanded="false"
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
              aria-labelledby="navbarDropdownMenuLink"
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
