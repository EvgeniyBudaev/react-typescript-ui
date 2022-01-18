import React, { useState } from "react";
import { Button, Modal } from "ui-kit";
import "./ModalPage.scss";

export const ModalPage: React.FC = () => {
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
        <Modal.Footer buttonSubmitText="Choice" onSubmit={handleModalSubmit} />
      </Modal>
    </section>
  );
};
