import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent, CloseButton } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');
const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
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
