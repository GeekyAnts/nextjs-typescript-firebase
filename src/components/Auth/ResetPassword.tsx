import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signUpUser } from '../../redux/actions';
import * as styles from '../../../styles/main.scss';
import Link from 'next/link';
import Router from 'next/router';

class ResetPassword extends Component {
  state = {
    currentPassword: null,
    newPassword: null,
    confirmPassword: null
  };

  handleSubmit = event => {
    event.preventDefault();
    //checkPassword then
    if (this.state.newPassword === this.state.currentPassword) {
      //this.props.resetPassword(this.state.newPassword) ;}
      Router.push('/signin');
    }
  };
  render() {
    return (
      <div className="sign-up">
        <div className={styles.panel}>
          <form onSubmit={this.handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="currenPasswordInput">
                {' '}
                Please Enter Your Current Password
              </label>
              <input
                id="currenPasswordInput"
                className={styles['form-control']}
                type="password"
                name="currentPassword"
                onChange={event =>
                  this.setState({ currentPassword: event.target.value })
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="newPassword1Input">
                {' '}
                Please Enter Your New Password
              </label>
              <input
                className={styles['form-control']}
                id="newPassword1Input"
                type="password"
                name="newPassword"
                onChange={event =>
                  this.setState({ newPassword: event.target.value })
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="confirmPasswordInput">
                {' '}
                Please Confirm Your New Password
              </label>
              <input
                className={
                  this.state.confirmPassword &&
                  this.state.newPassword !== this.state.confirmPassword
                    ? [styles['form-control'], styles['is-invalid']].join(' ')
                    : styles['form-control']
                }
                id="confirmPasswordInput"
                type="password"
                name="confirmPassword"
                onChange={event =>
                  this.setState({ confirmPassword: event.target.value })
                }
              />
              {this.state.confirmPassword &&
              this.state.newPassword !== this.state.confirmPassword ? (
                <small style={{ color: 'red' }}> Passwords doesn't match</small>
              ) : (
                true
              )}
            </div>
            <button
              className={[
                styles['btn-primary'],
                styles.btn,
                styles['submit-button']
              ].join(' ')}
              type="submit"
            >
              {' '}
              Submit{' '}
            </button>
            <small className={styles['center-text']}>
              {' '}
              Already a user , login{' '}
              <Link href="/signin">
                <a>here</a>
              </Link>
            </small>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(ResetPassword);
