import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Icon, Tooltip } from "ui-kit";
import { useCopyToClipboard } from "hooks/useCopyToClipboard";
import "./CopyPage.scss";

export const CopyPage: React.FC = () => {
  const userId1 = "c5c62093-8b0d-46fe-8939-a19aa3262199";
  const userId2 = "f34cd548-faa6-4e55-bda6-363fc8e7c9d2";
  const [hasCopied, setHasCopied] = useState({
    userId1: false,
    userId2: false,
  });
  const [value, copy] = useCopyToClipboard();

  const handleCopy = async (text: string, name: string): Promise<void> => {
    const isCopied = await copy(text);
    if (isCopied) {
      setHasCopied(prevState => ({
        ...prevState,
        [name]: true,
      }));
    }
  };

  useEffect(() => {
    const copyTimer = setTimeout(() => {
      setHasCopied(prevState => ({
        ...prevState,
        userId1: false,
        userId2: false,
      }));
    }, 1000);
    return () => clearTimeout(copyTimer);
  }, [hasCopied]);

  return (
    <section className="CopyPage">
      <h2>Copy to clipboard</h2>
      <hr />
      <div className="CopyPage-Details">
        <div className="CopyPage-Label">User ID</div>
        <div>{userId1}</div>
        <Tooltip behavior="click" content="Copied!" placement="right">
          <Icon
            className={classNames("CopyPage-Icon", {
              "CopyPage-Icon__active": hasCopied.userId1,
            })}
            type="Copy"
            onClick={() => handleCopy(userId1, "userId1")}
          />
        </Tooltip>
      </div>
      <br />
      <div className="CopyPage-Details">
        <div className="CopyPage-Label">User ID</div>
        <div>{userId2}</div>
        <Tooltip behavior="click" content="Copied!" placement="right">
          <Icon
            className={classNames("CopyPage-Icon", {
              "CopyPage-Icon__active": hasCopied.userId2,
            })}
            type="Copy"
            onClick={() => handleCopy(userId2, "userId2")}
          />
        </Tooltip>
      </div>
      <br />
      <p>Copied value: {value ?? "Nothing is copied yet!"}</p>
    </section>
  );
};
