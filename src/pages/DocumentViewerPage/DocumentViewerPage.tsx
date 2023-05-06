import { useState } from "react";
import type { FC } from "react";
import { Button, DocumentViewer, ETypographyVariant, Modal, Typography } from "uikit";
import { template } from "./template";
import "./DocumentViewerPage.scss";

export const DocumentViewerPage: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <section className="DocumentViewerPage">
      <h2>IFrame</h2>
      <iframe srcDoc={template} frameBorder="0"></iframe>
      <hr />
      <Typography variant={ETypographyVariant.TextH1Medium}>Document Viewer</Typography>
      <Button onClick={handleModalOpen}>Open Modal Window</Button>
      <Modal
        className="DocumentViewerPage-Modal"
        isOpen={isOpenModal}
        onCloseModal={handleModalClose}
      >
        <DocumentViewer template={template} />
      </Modal>
    </section>
  );
};
