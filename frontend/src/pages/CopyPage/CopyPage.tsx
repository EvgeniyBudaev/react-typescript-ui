import React from "react";
import { Icon } from "ui-kit";
import { useCopyToClipboard } from "hooks/useCopyToClipboard";
import "./CopyPage.scss";

export const CopyPage: React.FC = () => {
  const userId = "c5c62093-8b0d-46fe-8939-a19aa3262199";
  const [value, copy] = useCopyToClipboard();

  const handleCopy = () => {
    navigator.clipboard.writeText(userId);
  };

  return (
    <section className="CopyPage">
      <h2>Copy to clipboard</h2>
      <hr />
      <div className="CopyPage-Details">
        <div className="CopyPage-Label">User ID</div>
        <div>{userId}</div>
        {/*<Icon className="CopyPage-Icon" type="Copy" onClick={handleCopy} />*/}
        <Icon
          className="CopyPage-Icon"
          type="Copy"
          onClick={() => copy(userId)}
        />
      </div>
      <p>Copied value: {value ?? "Nothing is copied yet!"}</p>
    </section>
  );
};
