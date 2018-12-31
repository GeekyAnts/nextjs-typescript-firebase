import React, { Component } from 'react';
import * as styles from '../../../styles/main.scss';
import { connect } from 'react-redux';

export class ProfilePictureUpdate extends Component {
  state = {
    selectedFile: null
  };

  handleSelectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  handleUpload = () => {
    //upload the new profile picture
  };

  render() {
    return (
      <div
        className={styles.container}
        style={{ width: 'fit-content', margin: 'auto', paddingTop: '10%' }}
      >
        <div>
          {' '}
          <h3> Current Profile Picture </h3>
        </div>
        <div style={{ marginBottom: '50px' }}>
          <img
            src={
              this.state.selectedFile
                ? URL.createObjectURL(this.state.selectedFile)
                : 'https://react.semantic-ui.com/images/wireframe/image.png'
            }
            // height="250px"
            width="300px"
          />
        </div>
        <div className={styles['form-group']}>
          {' '}
          <label for="profilePicTureInput">Upload A New Profile Picture </label>
          <input
            id="profilePicTureInput"
            className={styles['form-control-file']}
            type="file"
            accept="image/gif, image/jpeg, image/png"
            onChange={this.handleSelectedFile}
          />
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(ProfilePictureUpdate);
