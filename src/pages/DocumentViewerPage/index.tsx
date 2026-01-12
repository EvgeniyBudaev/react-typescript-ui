import { useState } from "react";

import { Hr } from "components/Hr";
import { Title } from "components/Title";
import { Button, DocumentViewer, Modal } from "uikit";

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
      <Title>IFrame</Title>
      <iframe srcDoc={template} frameBorder="0"></iframe>
      <Hr />
      <Title>Document Viewer</Title>
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
