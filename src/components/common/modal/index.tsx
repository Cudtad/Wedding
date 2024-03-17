import React, { useState, useEffect, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isOpenState, setIsOpenState] = useState<boolean>(isOpen);

  // Xử lý khi modal được mở hoặc đóng từ props
  useEffect(() => {
    setIsOpenState(isOpen);
  }, [isOpen]);

  // Xử lý khi người dùng click để đóng modal
  const handleClose = (): void => {
    setIsOpenState(false);
    onClose();
  };

  return (
    <>
      {isOpenState && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="modal z-50 bg-white rounded-lg p-6 w-[420px] h-auto relative">
            <span
              className="absolute top-0.5 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
