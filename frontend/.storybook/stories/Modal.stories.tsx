import React, { useState } from "react";
import { Button, Modal } from "ui-kit";

export default { title: "Modal" };

export const stories = () => {
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
    <div>
      <div className="story">
        <label>Modal</label>
        <Button onClick={handleModalOpen}>Open</Button>
        <Modal isOpen={isOpenModal} onCloseModal={handleModalClose}>
          <Modal.Header>
            <h2>Title</h2>
          </Modal.Header>
          <Modal.Content>
            <div>Content</div>
          </Modal.Content>
          <Modal.Footer
            buttonSubmitText="Choice"
            onSubmit={handleModalSubmit}
          />
        </Modal>
      </div>
    </div>
  );
};
