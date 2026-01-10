import type { FC } from "react";
import { Hr } from "components/Hr";
import { Title } from "components/Title";
import { CopyToClipboard } from "uikit";
import "./CopyPage.scss";

export const CopyPage: FC = () => {
  const userId1 = "c5c62093-8b0d-46fe-8939-a19aa3262199";
  const userId2 = "f34cd548-faa6-4e55-bda6-363fc8e7c9d2";

  return (
    <section className="CopyPage">
      <Title>Copy to clipboard</Title>
      <Hr />
      <div className="CopyPage-Details">
        <div className="CopyPage-Label">User ID</div>
        <div>{userId1}</div>
        <CopyToClipboard value={userId1} />
      </div>
      <br />
      <div className="CopyPage-Details">
        <div className="CopyPage-Label">User ID</div>
        <div>{userId2}</div>
        <CopyToClipboard value={userId2} />
      </div>
    </section>
  );
};
