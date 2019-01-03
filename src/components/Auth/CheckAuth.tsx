import React from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';
import { fetchUser } from '../../redux/actions';

class checkAuth extends React.Component<{
  auth: boolean;
  router: { pathname: string };
  fetchUser: Function;
}> {
  route = auth => {
    if (auth === false) {
      this.props.router.pathname !== '/signin' &&
        Router.push({
          pathname: '/signin',
          query: { current: this.props.router.pathname }
        });
    }
    if (auth === true) {
      if (
        (this.props.router && this.props.router.pathname === '/') ||
        this.props.router.pathname === '/signin'
      ) {
        Router.push('/dashboard');
      }
    }
  };

  render() {
    (typeof this.props.auth !== 'undefined' || this.props.auth !== null) &&
      this.route(this.props.auth);

    return null;
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchUser }
  )(checkAuth)
);
