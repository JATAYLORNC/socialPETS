import React from 'react';
import PropTypes from 'prop-types';
import "../styles/modal.css"

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdropStyle position-fixed">
        <div className="footer d-flex justify-content-end">
          <i className="fas fa-times btn " onClick={this.props.onClose}></i>
        </div>
        <div className="modalStyle">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;