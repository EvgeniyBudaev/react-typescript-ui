declare module "@mona-health/react-input-mask" {
  import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";

  export interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
    alwaysShowMask?: boolean;
    beforeMaskedStateChange?: (state: BeforeMaskedStateChangeStates) => InputState;
    defaultValue: string | number | readonly string[];
    mask: string | (string | RegExp)[];
    maskPlaceholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
  }

  const InputMask: FC<InputMaskProps>;
  export default InputMask;
}
