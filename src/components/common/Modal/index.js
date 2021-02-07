// Global
import React from 'react';
import PropTypes from 'prop-types';
// Stylesheet
import './index.scss';

function Modal({ children, show, onClose }) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  document.addEventListener('keydown', (keyboardEvent) => {
    if (keyboardEvent.key === 'Escape') {
      onClose();
    }
  });

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
      </section>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  onClose: PropTypes.func,
}

export default Modal;
