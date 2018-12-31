import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as styles from '../../../styles/main.scss';
import { updateUser } from '../../redux/actions';

class ProfileDetailsUpdate extends Component {
  state: {
    name: string;
    email: string;
    gender: string;
    dob: string;
  } = {
    name: '',
    email: '',
    gender: '',
    dob: 'dd/mm/yyy'
  };
  componentDidMount() {
    this.setState(this.props.user);
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log('updated user', this.state);
    this.props.updateUser(this.state);
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.panel}>
          <form onSubmit={this.handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="nameInput"> Name</label>
              <input
                id="nameInput"
                className={styles['form-control']}
                type="text"
                value={this.state.name}
                name="name"
                onChange={event => this.setState({ name: event.target.value })}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="dobInput"> Date of Birth</label>
              <input
                id="dobInput"
                className={styles['form-control']}
                type="date"
                value={this.state.dob}
                name="dob"
                onChange={event => this.setState({ dob: event.target.value })}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="genderInput"> Gender</label>
              <select
                id="genderInput"
                className={styles['form-control']}
                value={this.state.gender}
                name="gender"
                onChange={event =>
                  this.setState({ gender: event.target.value })
                }
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
                value={this.state.email}
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
            >
              {' '}
              Submit{' '}
            </button>
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
  { updateUser }
)(ProfileDetailsUpdate);
