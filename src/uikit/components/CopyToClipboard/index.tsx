import clsx from "clsx";
import { memo, useEffect, useState } from "react";

import { Icon, Tooltip } from "uikit";
import { useCopyToClipboard } from "uikit/hooks";

import type { TCopyToClipboardProps } from "./types";
import "./CopyToClipboard.scss";

const CopyToClipboardComponent: FC<TCopyToClipboardProps> = ({
  classes,
  className,
  dataTestId = "uikit__copyToClipboard",
  timerDelay = 1000,
  tooltip,
  value,
}) => {
  const [hasCopied, setHasCopied] = useState(false);
  const [, copy] = useCopyToClipboard();

  const handleCopyToClipboard = (value: string) => {
    copy(value);
    setHasCopied((prevState) => (prevState ? prevState : true));
  };

  useEffect(() => {
    const copyTimer = setTimeout(() => {
      setHasCopied((prevState) => (prevState ? false : prevState));
    }, timerDelay);
    return () => clearTimeout(copyTimer);
  }, [hasCopied, timerDelay]);

  const renderContent = (value: string) => {
    return (
      <div className={clsx("CopyToClipboard", className)} data-testid={dataTestId}>
        {hasCopied ? (
          <Tooltip
            classes={{ popperElement: "CopyToClipboard-Tooltip-PopperElement" }}
            isVisible={hasCopied}
            message={tooltip?.message ?? "Copied!"}
            placement={tooltip?.placement ?? "right"}
            timerDelay={timerDelay}
          >
            <Icon className="CopyToClipboard-Icon__success" type="Success" />
          </Tooltip>
        ) : (
          <Icon
            className={clsx("CopyToClipboard-Icon", classes?.copyIcon)}
            onClick={() => handleCopyToClipboard(value)}
            type="Copy"
          />
        )}
      </div>
    );
  };

  return renderContent(value);
};

CopyToClipboardComponent.displayName = "CopyToClipboard";

export const CopyToClipboard = memo(CopyToClipboardComponent);
