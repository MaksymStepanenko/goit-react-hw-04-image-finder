import React, { Component } from 'react';
import { StyledOverlay, StyledModal } from './slyled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onShowModal();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onShowModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <StyledOverlay onClick={this.handleOverlayClick}>
        <StyledModal>
          <img src={this.props.visibleData} alt={this.props.visibleData} />
        </StyledModal>
      </StyledOverlay>
    );
  }
}
Modal.propTypes = {
  visibleData: PropTypes.string.isRequired,
  onShowModal: PropTypes.func.isRequired,
};