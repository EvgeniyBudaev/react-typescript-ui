import { EAlert } from "./enums";

export type TAlertProps = {
  className?: string;
  dataTestId?: string;
  description?: string;
  title?: string;
  type?: EAlert;
  onClose?: () => void;
};
