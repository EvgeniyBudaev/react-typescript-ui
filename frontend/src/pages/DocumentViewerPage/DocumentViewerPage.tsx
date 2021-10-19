import React, { useState } from "react";
import { Button, DocumentViewer, Modal } from "ui-kit";
import { template } from "./template";
import "./DocumentViewerPage.scss";

export const DocumentViewerPage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="DocumentViewerPage">
      <h2>IFrame</h2>
      <iframe srcDoc={template} frameBorder="0"></iframe>
      <hr />
      <h2 className="DocumentViewerPage-DocumentViewer">Document Viewer</h2>
      <Button onClick={handleModalOpen}>Open Modal Window</Button>
      <Modal
        className="DocumentViewerPage-Modal"
        isOpen={isOpenModal}
        onCloseModal={handleModalClose}
      >
        <DocumentViewer template={template} />
      </Modal>
    </div>
  );
};
