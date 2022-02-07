import React from "react";
import { toast } from "react-toastify";
import { Alert, AlertType } from "ui-kit";

export const AlertError = (
  title?: string,
  description?: string
): React.ReactText =>
  toast.error(
    <Alert title={title} description={description} type={AlertType.Error} />,
    {
      position: toast.POSITION.TOP_RIGHT,
    }
  );
