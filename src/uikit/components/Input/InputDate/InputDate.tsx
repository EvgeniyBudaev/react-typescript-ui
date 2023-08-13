import clsx from "clsx";
import { memo } from "react";
import type { FC, SyntheticEvent } from "react";
import { Icon } from "../../Icon";
import "./InputDate.scss";

type TProps = {
  className?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  onClick?: (event: SyntheticEvent) => void;
  onFieldClear?: (event: SyntheticEvent) => void;
  placeholder?: string;
  subTitle?: string;
  title?: string;
  value?: string | null;
};

const InputDateComponent: FC<TProps> = (props) => {
  const {
    className,
    isDisabled,
    isInvalid,
    onClick,
    onFieldClear,
    placeholder,
    subTitle,
    title,
    value,
  } = props;

  return (
    <div
      className={clsx("InputDate", className, {
        InputDate__isDisabled: isDisabled,
        InputDate__isInvalid: isInvalid && !isDisabled,
      })}
      onClick={!isDisabled ? onClick : undefined}
    >
      <div className="InputDate-Inner">
        <div className="InputDate-Title">{title}&nbsp;</div>
        <div
          className={clsx("InputDate-IconWrapper", {
            "InputDate-IconWrapper__isFocusable": !isDisabled,
          })}
        >
          <div
            className={clsx("InputDate-Text", {
              "InputDate-Text__isFilled": value && !isDisabled,
              "InputDate-Text__isPlaceholder": !value,
            })}
          >
            {value ?? placeholder}
          </div>
          {value && <div className="InputDate-PostIcon" onClick={onFieldClear} />}

          <Icon className="InputDate-DatePickerIcon" type="Calendar" />
        </div>
        <div className="InputDate-Text__isInvalid" />
      </div>
      <div className="InputDate-SubTitle">{subTitle}&nbsp;</div>
    </div>
  );
};

export const InputDate = memo(InputDateComponent);
