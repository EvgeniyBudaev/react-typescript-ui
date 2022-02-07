import React from "react";

export enum AlertType {
  Error = "Error",
  Success = "Success",
  Warning = "Warning",
}

export interface IAlertProps {
  className?: string;
  description?: string;
  title?: string;
  type?: AlertType;
  onClose?: () => void;
}

export const Alert: React.FC<IAlertProps> = ({
  className,
  description,
  title,
}) => {
  return (
    <div className={className}>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};
