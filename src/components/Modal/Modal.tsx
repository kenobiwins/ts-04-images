// import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';
import { FC, ReactNode, useEffect } from 'react';

interface IModal {
  closeModal: (...args: any[]) => any;
  children?: ReactNode;
}

type IRoot = Element | null;

const modalRoot: IRoot = document.querySelector('#modal-root')!;

export const Modal: FC<IModal> = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    return () => window.removeEventListener('keydown', handleClose);
  });

  function handleClose(e: any) {
    const { target, currentTarget } = e as Event;
    if (target === currentTarget) {
      closeModal();
      return;
    }
    if (e.code === 'Escape') {
      closeModal();
      return;
    }
  }

  return createPortal(
    <Backdrop onClick={handleClose}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

// Modal.propTypes = {
//   closeModal: PropTypes.func.isRequired,
//   children: PropTypes.element.isRequired,
// };
