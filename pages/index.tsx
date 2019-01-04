import React from 'react';
import * as styles from '../styles/main.scss';
import CheckAuth from '../src/components/Auth/CheckAuth';
import { MoonLoader } from 'react-spinners';

class Index extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div
          className={[styles.container, styles['centered-container']].join(' ')}
        >
          <CheckAuth />
          <MoonLoader sizeUnit={'px'} size={300} color={'#123abc'} />
        </div>
      </div>
    );
  }
}

export default Index;
