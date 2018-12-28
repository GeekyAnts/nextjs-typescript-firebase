import store from '../src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import 'bootstrap';
// import { connect } from 'react-redux';

class App extends React.Component {
  reduxState = store.getState();
  componentDidMount() {
    this.reduxState.user.email ? Router.push('/home') : Router.push('/signin');
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <Link href="/signin">
            <a>Link to signin page</a>
          </Link>
        </div>
      </Provider>
    );
  }
}

export default App;

// const mapStateToProps = ({ user }) => {
//   return { user };
// };

// export default connect(mapStateToProps)(App);
