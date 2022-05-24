import React from "react";
import { Icon } from "ui-kit";
import { useCopyToClipboard } from "hooks/useCopyToClipboard";
import "./CopyPage.scss";

export const CopyPage: React.FC = () => {
  const userId1 = "c5c62093-8b0d-46fe-8939-a19aa3262199";
  const userId2 = "f34cd548-faa6-4e55-bda6-363fc8e7c9d2";
  const [value, copy] = useCopyToClipboard();

  return (
    <section className="CopyPage">
      <h2>Copy to clipboard</h2>
      <hr />
      <div className="CopyPage-Details">
        <div className="CopyPage-Label">User ID</div>
        <div>{userId1}</div>
        <Icon
          className="CopyPage-Icon"
          type="Copy"
          onClick={() => copy(userId1)}
        />
      </div>
      <br />
      <div className="CopyPage-Details">
        <div className="CopyPage-Label">User ID</div>
        <div>{userId2}</div>
        <Icon
          className="CopyPage-Icon"
          type="Copy"
          onClick={() => copy(userId2)}
        />
      </div>
      <br />
      <p>Copied value: {value ?? "Nothing is copied yet!"}</p>
    </section>
  );
};
