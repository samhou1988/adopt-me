import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const elRef = useRef<any>(null);
  if (!elRef.current) {
    const modal = document.createElement('div');
    modal.id = 'modal';
    elRef.current = modal;
  }

  useEffect(() => {
    const body = document.body;
    body.appendChild(elRef.current);
    return () => body.removeChild(elRef.current);
  }, []);

  return createPortal(<div className="modal">{children}</div>, elRef.current);
};

export default Modal;
