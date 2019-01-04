import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { MoonLoader } from 'react-spinners';

import { IUser } from '../../interfaces';
import { signInUser } from '../../redux/actions';
import * as styles from '../../../styles/main.scss';

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
    signingIn: boolean;
  }
> {
  state = {
    email: '',
    password: '',
    error: null,
    signingIn: false
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ signingIn: true });
    this.props
      .signInUser({ email: this.state.email, password: this.state.password })
      .catch((err: { code: string; message: string }) => {
        this.setState({ signingIn: false });
        this.setState({ error: err.code });
      })
      .then(response => {
        this.setState({ signingIn: false });
        if (!Router.router.query.current || Router.router.query.current === '/')
          response && Router.push('/dashboard');
        else {
          response &&
            Router.router.query.current &&
            Router.push(Router.router.query.current);
        }
      });
  };
  render() {
    let facts = {};
    if (typeof window !== 'undefined') {
      facts = window.__NEXT_DATA__.props.facts;
    }

    return (
      <div>
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
          <form
            // className={[styles['form-inline']].join(' ')}
            className={[styles['row']].join(' ')}
            onSubmit={this.handleSubmit}
          >
            <div
              className={[
                styles['form-group'],
                styles['sm-5'],
                styles['no-bottom-margin'],
                styles['mr-1']
              ].join(' ')}
              style={{ color: 'whitesmoke' }}
            >
              <label htmlFor="emailInput"> Email Address</label>
              <input
                className={styles['form-control']}
                id="emailInput"
                type="email"
                name="email"
                onChange={event => this.setState({ email: event.target.value })}
              />
              <small>
                {' '}
                Not a user ? register{' '}
                <Link href="/signup">
                  <a>here</a>
                </Link>{' '}
              </small>
            </div>
            <div
              className={[
                styles['form-group'],
                styles['no-bottom-margin'],
                styles['sm-5'],
                styles['mr-1']
              ].join(' ')}
              style={{ color: 'whitesmoke' }}
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
              <small>
                Forgot your password , click{' '}
                <Link href="/forgot-password">
                  <a> here</a>
                </Link>
              </small>
            </div>

            <div className={[styles['mr-sm-2']].join(' ')}>
              {this.state.signingIn ? (
                <div className={styles['submit-button']}>
                  <MoonLoader sizeUnit={'px'} size={30} color={'whitesmoke'} />{' '}
                </div>
              ) : (
                <button
                  disabled={this.state.signingIn}
                  className={[
                    styles.btn,
                    styles['btn-primary'],
                    styles['submit-button']
                  ].join(' ')}
                  type="submit"
                  style={{ marginTop: '40%' }}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </nav>
        <div
          className={styles['centered-text']}
          style={{ margin: 'auto', width: 'fit-content', color: 'red' }}
        >
          {this.state.error
            ? this.state.error
                .split('/')[1]
                .split('-')
                .join(' ')
            : ''}
        </div>
        <div className={[styles.row].join(' ')}>
          {facts.all &&
            facts.all.map(item => (
              <div
                key={item._id}
                className={[
                  styles.card,
                  styles['col-sm-3'],

                  styles['ml-sm-5'],
                  styles['mt-sm-4']
                ].join(' ')}
              >
                <div className={styles['card-body']}>
                  <h5 className={styles['card-title']}>
                    {item.user && item.user.name.first}
                  </h5>
                  <h6
                    className={[
                      styles['card-subtitle'],
                      styles['mb-2'],
                      styles['text-muted']
                    ].join(' ')}
                  >
                    {item.user && item.user.name.last}
                  </h6>
                  <p className={styles['card-text']}>
                    {' '}
                    {item.text.substr(0, 100)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
    //       <div className="signin">
    //         <div className={styles.panel}>
    //           <div
    //             style={{
    //               textAlign: 'center',
    //               color: 'red',
    //               marginBottom: '10px'
    //             }}
    //           >
    //             {' '}
    //             {this.state.error
    //               ? this.state.error
    //                   .split('/')[1]
    //                   .split('-')
    //                   .join(' ')
    //               : ''}
    //           </div>

    //         </div>
    //       </div>
    //     );
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
