import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import * as styles from '../../../styles/main.scss';
import Link from 'next/link';
import Router from 'next/router';

class ForgotPassword extends Component {
  state = {
    email: null,
    otp: null,
    newPassword: null,
    confirmPassword: null,
    emailConfirmed: false,
    otpConfirmed: false
  };

  handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //confirm if email exists
    //then
    this.setState({ emailConfirmed: true });
  };

  handleOtpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //confirm if otp is valid
    //then
    this.setState({ otpConfirmed: true });
  };

  handlePasswordSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.state.newPassword === this.state.confirmPassword) {
      Router.push('/');
    }
  };

  forgotPasswordForm = () => {
    if (!this.state.emailConfirmed) {
      return (
        <form onSubmit={this.handleEmailSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="emailInput">
              {' '}
              Please enter your registered email address
            </label>
            <input
              id="emailInput"
              className={styles['form-control']}
              type="email"
              name="email"
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <button
            className={[
              styles['btn-primary'],
              styles.btn,
              styles['submit-button']
            ].join(' ')}
            type="submit"
            style={{ marginTop: 0 }}
          >
            {' '}
            Submit{' '}
          </button>
        </form>
      );
    }
    if (!this.state.otpConfirmed) {
      return (
        <form onSubmit={this.handleOtpSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="otpInput">
              {' '}
              Please enter the One Time Password you have recieved on your email
            </label>
            <input
              id="otpInput"
              className={styles['form-control']}
              type="text"
              name="otp"
              onChange={event => this.setState({ otp: event.target.value })}
            />
          </div>
          <button
            className={[
              styles['btn-primary'],
              styles.btn,
              styles['submit-button']
            ].join(' ')}
            type="submit"
            style={{ marginTop: 0 }}
          >
            {' '}
            Submit{' '}
          </button>
        </form>
      );
    }
    return (
      <form onSubmit={this.handlePasswordSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="newPasswordInput">
            {' '}
            Please enter your new password
          </label>
          <input
            id="newPasswordInput"
            className={styles['form-control']}
            type="password"
            name="newPassword"
            onChange={event =>
              this.setState({ newPassword: event.target.value })
            }
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="confirmPasswordInput"> Confirm Your password</label>
          <input
            id="confirmPasswordInput"
            className={
              this.state.confirmPassword &&
              this.state.newPassword !== this.state.confirmPassword
                ? [styles['form-control'], styles['is-invalid']].join(' ')
                : styles['form-control']
            }
            type="password"
            name="newPassword"
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
          style={{ marginTop: 0 }}
        >
          {' '}
          Submit{' '}
        </button>
      </form>
    );
  };
  render() {
    return (
      <div className="forgot-password">
        <div className={styles.panel}>{this.forgotPasswordForm()}</div>
      </div>
    );
  }
}

export default ForgotPassword;
