import * as React from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../redux/actions';
import * as styles from '../../../styles/main.scss';
import Link from 'next/link';
import Router from 'next/router';
import { IUserSignUp } from '../../interfaces';
import { MoonLoader } from 'react-spinners';

class SignUp extends React.Component<
  {
    user: IUserSignUp;
    signUpUser: (user: IUserSignUp) => Promise<string>;
  },
  any
> {
  state = {
    user: {
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      dob: '',
      name: ''
    },
    error: null,
    signingUp: false
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.user.confirmPassword === this.state.user.password) {
      this.setState({ signingUp: true });
      this.props
        .signUpUser({ ...this.state.user })
        .then(() => {
          this.setState({ signingUp: false });
          Router.push('/dashboard');
        })
        .catch(err => {
          this.setState({ signingUp: false });
          this.setState({ error: err.message });
        });
    }
  };
  render() {
    var passMatch: boolean = false;

    if (
      !this.state.user.confirmPassword ||
      this.state.user.password === this.state.user.confirmPassword
    ) {
      passMatch = true;
    }

    return (
      <div className="sign-up">
        <div className={styles.panel}>
          <div style={{ color: 'red' }}>{this.state.error || ''}</div>
          <form onSubmit={this.handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="nameInput"> Name</label>
              <input
                id="nameInput"
                className={styles['form-control']}
                type="text"
                name="name"
                onChange={event =>
                  this.setState({
                    user: { ...this.state.user, name: event.target.value }
                  })
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="dobInput"> Date of Birth</label>
              <input
                id="dobInput"
                className={styles['form-control']}
                type="date"
                name="dob"
                onChange={event =>
                  this.setState({
                    user: { ...this.state.user, dob: event.target.value }
                  })
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="genderInput"> Gender</label>
              <select
                id="genderInput"
                className={styles['form-control']}
                name="gender"
                onChange={event => {
                  this.setState({
                    user: { ...this.state.user, gender: event.target.value }
                  });
                }}
              >
                <option> male </option>
                <option> female </option>
                <option> decline to self identity </option>
              </select>
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="emailInput"> Email</label>
              <input
                id="emailInput"
                className={styles['form-control']}
                type="email"
                name="email"
                onChange={event =>
                  this.setState({
                    user: { ...this.state.user, email: event.target.value }
                  })
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="passwordInput"> Password</label>
              <input
                className={styles['form-control']}
                id="passwordInput"
                type="password"
                name="password"
                onChange={event =>
                  this.setState({
                    user: { ...this.state.user, password: event.target.value }
                  })
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="confirmPasswordInput">Confirm Password</label>
              <input
                className={
                  passMatch
                    ? styles['form-control']
                    : [styles['form-control'], styles['is-invalid']].join(' ')
                }
                id="confirmPasswordInput"
                type="password"
                name="confirmPassword"
                onChange={event =>
                  this.setState({
                    user: {
                      ...this.state.user,
                      confirmPassword: event.target.value
                    }
                  })
                }
              />
              <small> {!passMatch && ' passwords dont match'}</small>
            </div>
            {this.state.signingUp ? (
              <div className={styles['submit-button']}>
                <MoonLoader sizeUnit={'px'} size={30} color={'#123abc'} />{' '}
              </div>
            ) : (
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
            )}
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
