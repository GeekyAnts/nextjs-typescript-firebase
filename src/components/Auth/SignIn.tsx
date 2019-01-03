import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../../redux/actions';
import * as styles from '../../../styles/main.scss';
import Link from 'next/link';
import { IUser } from '../../interfaces';
import Router from 'next/router';
// import 'bootstrap/dist/css/bootstrap.min.css';

class SignIn extends Component<
  {
    user: IUser;
    signInUser: (user: { email: string; password: string }) => Promise<string>;
    fetchUser: () => Promise<string>;
  },
  {
    email: string;
    password: string;
    error: string;
  }
> {
  state = {
    email: '',
    password: '',
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props
      .signInUser({ email: this.state.email, password: this.state.password })
      .catch((err: { code: string; message: string }) => {
        this.setState({ error: err.code });
      })
      .then(response => {
        if (Router.router.query.current === '/')
          response && Router.push('/dashboard');
        else response && Router.push(Router.router.query.current);
      });
  };
  render() {
    return (
      <div className="signin">
        <div className={styles.panel}>
          <div
            style={{
              textAlign: 'center',
              color: 'red',
              marginBottom: '10px'
            }}
          >
            {' '}
            {this.state.error
              ? this.state.error
                  .split('/')[1]
                  .split('-')
                  .join(' ')
              : ''}
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="emailInput"> Email Address</label>
              <input
                className={styles['form-control']}
                id="emailInput"
                type="email"
                name="email"
                onChange={event => this.setState({ email: event.target.value })}
              />
            </div>
            <div
              className={[
                styles['form-group'],
                styles['no-bottom-margin']
              ].join(' ')}
            >
              <label htmlFor="passwordInput"> Password</label>
              <input
                id="password"
                className={[styles['form-control']].join(' ')}
                type="password"
                name="password"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </div>
            <small>
              Forgot your password , click{' '}
              <Link href="/forgot-password">
                <a> here</a>
              </Link>
            </small>
            <button
              className={[
                styles.btn,
                styles['btn-primary'],
                styles['submit-button']
              ].join(' ')}
              type="submit"
            >
              {' '}
              Submit{' '}
            </button>
            <small className={styles['center-text']}>
              {' '}
              not a user , register{' '}
              <Link href="/signup">
                <a>here</a>
              </Link>{' '}
            </small>
          </form>
        </div>
      </div>
    );
  }
}

// export default SignIn;

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(
  mapStateToProps,
  { signInUser }
)(SignIn);
