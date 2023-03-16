import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {


  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal} >
          <Modal.Header closeButton>{this.props.title}</Modal.Header>
          <Modal.Body>
            <p>
            {this.props.desc}
            </p>
            <img src={this.props.src} alt={this.props.title} />
          </Modal.Body>
        </Modal>

      </>



    )

  }


}

export default SelectedBeast