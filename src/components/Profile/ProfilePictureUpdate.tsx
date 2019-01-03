import React, { Component } from 'react';
import * as styles from '../../../styles/main.scss';
import { connect } from 'react-redux';
import { uploadProfilePicture } from '../../redux/actions';

export class ProfilePictureUpdate extends Component<
  { user; uploadProfilePicture: Function },
  any
> {
  state = {
    selectedFile: null,
    progress: null,
    status: null
  };

  handleSelectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  handleUpload = () => {
    //upload the new profile picture
    this.props.uploadProfilePicture(
      this.state.selectedFile,
      this.props.user.uid,
      (progress, status) => {
        this.setState({ progress, status });
      }
    );
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
          {this.state.progress ? (
            <div> uploading {Math.floor(this.state.progress)} %</div>
          ) : (
            <img
              src={
                (this.props.user && this.props.user.photoURL) ||
                'https://react.semantic-ui.com/images/wireframe/image.png'
              }
              // height="250px"
              width="300px"
            />
          )}
        </div>
        <small>
          {' '}
          {this.state.status
            ? 'Uploaded Successfully'
            : this.state.status === false && 'Upload failed'}
        </small>
        <div className={styles['form-group']}>
          {' '}
          <label htmlFor="profilePicTureInput">
            Upload A New Profile Picture{' '}
          </label>
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
            onClick={this.handleUpload}
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

export default connect(
  mapStateToProps,
  { uploadProfilePicture }
)(ProfilePictureUpdate);
