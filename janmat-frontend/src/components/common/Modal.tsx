import React from "react";

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
  confirmText,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl shadow-xl border border-white/20 bg-gray-900/80 backdrop-blur-md p-6">
        {title && (
          <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
        )}

        <div className="text-gray-200">{children}</div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-600"
          >
            Cancel
          </button>
          {onConfirm && (
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
            >
              {confirmText || "Confirm"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
