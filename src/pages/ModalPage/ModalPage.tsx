import { useState } from "react";
import type { FC } from "react";
import { Button, Modal } from "uikit";
import "./ModalPage.scss";

export const ModalPage: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  const handleModalSubmit = () => {
    setIsOpenModal(false);
  };

  return (
    <section className="ModalPage">
      <h2>Modal</h2>
      <Button onClick={handleModalOpen}>Open</Button>
      <Modal isOpen={isOpenModal} onCloseModal={handleModalClose}>
        <Modal.Header>
          <h2>Title</h2>
        </Modal.Header>
        <Modal.Content>
          <div>Content</div>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={handleModalSubmit} type={"submit"}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
