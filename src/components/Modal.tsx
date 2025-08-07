import '../styles/Modal.css';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        function handleEscape(event: KeyboardEvent) {
          if (event.key === 'Escape' && isOpen) {
            onClose();
          }
        }

        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = originalOverflow;
        }

        document.addEventListener('keydown', handleEscape);
        return () => {
          document.removeEventListener('keydown', handleEscape);
          document.body.style.overflow = originalOverflow;
        };
    }, [isOpen, onClose]);

    return isOpen ? (
      <div className="modal">
        <p>{children}</p>
      </div>
    ) : null;
}