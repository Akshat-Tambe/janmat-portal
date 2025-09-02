import React from 'react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  confirmText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = 'Confirm',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-modal p-6 w-full max-w-md">
        {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
        <div className="mb-4">{children}</div>
        <div className="flex justify-end space-x-2">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          {onConfirm && <Button variant="primary" onClick={onConfirm}>{confirmText}</Button>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
