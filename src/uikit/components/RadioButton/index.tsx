import clsx from "clsx";
import { type FC, memo } from "react";
import { Typography } from "../Typography";
import type { TRadioButtonProps } from "./types";
import { NativeRadioButton } from "./NativeRadioButton";
import "./RadioButton.scss";

const RadioButtonComponent: FC<TRadioButtonProps> = ({ checked, label, name, onChange, value }) => {
  return (
    <div className="RadioButton">
      <label className="RadioButton-Label" htmlFor={name}>
        <NativeRadioButton
          checked={checked}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
        />
        <div
          className={clsx("RadioButton-Radio", {
            ["RadioButton-Radio__checked"]: checked,
          })}
        />
        <Typography>{label}</Typography>
      </label>
    </div>
  );
};

RadioButtonComponent.displayName = "RadioButton";

export const RadioButton = memo(RadioButtonComponent);
