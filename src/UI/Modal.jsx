import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

export default function Modal({ children, open, className = '' }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.showModal();
    } else {
      // dialog.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
