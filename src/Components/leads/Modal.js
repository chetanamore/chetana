import React from 'react';
import '../leads/leads.css';

const Modal = ({ show, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className='pop-head'>Enter Follow Up Message</h2>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
