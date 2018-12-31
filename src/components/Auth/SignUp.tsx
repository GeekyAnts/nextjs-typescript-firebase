import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../redux/actions';
import * as styles from '../../../styles/main.scss';
import Link from 'next/link';
import Router from 'next/router';

class SignUp extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props);
    this.props.signUpUser({ ...this.state }).then(() => {
      Router.push('/dashboard');
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="sign-up">
        <div className={styles.panel}>
          <form onSubmit={this.handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="emailInput"> Email</label>
              <input
                id="emailInput"
                className={styles['form-control']}
                type="email"
                name="email"
                onChange={event => this.setState({ email: event.target.value })}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="passwordInput"> Password</label>
              <input
                className={styles['form-control']}
                id="passwordInput"
                type="password"
                name="password"
              />
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

export default connect(
  mapStateToProps,
  { signUpUser }
)(SignUp);
