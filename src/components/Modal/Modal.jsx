import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    // console.log('Кликнули в бекдроп');

    // console.log('currentTarget: ', e.currentTarget);
    // console.log('target: ', e.target);

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
    if (e.target.nodeName === 'BUTTON') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
// div class="overlay">
//   <div class="modal">
//     <img src="" alt="" />
//   </div>
// </div>

// import * as basicLightbox from 'basiclightbox';

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();
