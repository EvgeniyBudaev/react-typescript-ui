import type { FC } from "react";
import { Button, ETypographyVariant, Modal, Typography } from "uikit";
import "./ModalDelete.scss";

type TProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

export const ModalDelete: FC<TProps> = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Modal isOpen={isOpen} onCloseModal={onClose}>
      <Modal.Header>
        <Typography variant={ETypographyVariant.TextB2Bold}>
          Are you sure you want to delete?
        </Typography>
      </Modal.Header>
      <Modal.Footer>
        <div className="ModalDelete-Footer">
          <Button className="ModalDelete-Cancel" onClick={onClose}>
            cCancel
          </Button>
          <Button onClick={onSubmit} type={"submit"}>
            Delete
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
