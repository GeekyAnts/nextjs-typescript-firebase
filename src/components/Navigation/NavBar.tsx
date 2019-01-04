import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import * as styles from '../../../styles/main.scss';
import { connect } from 'react-redux';
import { signOutUser } from '../../redux/actions';

class NavBar extends Component<
  { signOutUser: () => void },
  { dropdownOpen: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
  }
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
                this.setState({
                  dropdownOpen: !this.state.dropdownOpen
                  // dropdownOpen: true
                })
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
                this.state && this.state.dropdownOpen
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
              <span
                className={styles['dropdown-item']}
                onClick={() => Router.push('/reset-password')}
              >
                Change Password
              </span>
              <span
                className={styles['dropdown-item']}
                onClick={() => this.props.signOutUser()}
              >
                Sign Out
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ user, auth }) => {
  return { user, auth };
};

export default connect(
  mapStateToProps,
  { signOutUser }
)(NavBar);
