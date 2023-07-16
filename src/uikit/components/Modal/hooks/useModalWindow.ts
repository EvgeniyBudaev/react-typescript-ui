import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

export type TUseModalWindow = (args?: { defaultOpen?: boolean }) => {
  closeModal: () => void;
  isOpenModal: boolean;
  openModal: () => void;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const useModalWindow: TUseModalWindow = ({ defaultOpen = false } = {}) => {
  const [isOpenModal, setIsOpenModal] = useState(defaultOpen);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return {
    closeModal,
    isOpenModal,
    openModal,
    setIsOpenModal,
  };
};
