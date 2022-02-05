import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent, CloseButton } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');
const Modal = ({ onClose, children }) => {
  useEffect(() => {
    console.log('Modal componentDidMount');
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('Нажали ESC, нужно закрыть модалку');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    console.log('Modal componentWillUnmount');
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
    if (e.target.nodeName === 'BUTTON') {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton type="button">x</CloseButton>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
export default Modal;
Modal.propTypes = {
  onClick: PropTypes.func,
};
// export default class Modal extends Component {
//   componentDidMount() {
//     console.log('Modal componentDidMount');
//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     console.log('Modal componentWillUnmount');
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       console.log('Нажали ESC, нужно закрыть модалку');
//       this.props.onClose();
//     }
//   };
//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//     if (e.target.nodeName === 'BUTTON') {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return createPortal(
//       <ModalBackdrop onClick={this.handleBackdropClick}>
//         <ModalContent>
//           <CloseButton type="button">x</CloseButton>
//           {this.props.children}
//         </ModalContent>
//       </ModalBackdrop>,
//       modalRoot
//     );
//   }
// }
// Modal.propTypes = {
//   onClick: PropTypes.func,
// };
