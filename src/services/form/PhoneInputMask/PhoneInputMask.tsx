import { memo } from "react";
import type { FC } from "react";
import type { BeforeMaskedStateChangeStates } from "react-input-mask";
import { InputMask } from "services/form";
import type { TInputMaskProps } from "services/form";
import {
  PAST_BUG_8_PHONE,
  PAST_BUG_PHONE,
  PHONE_MASK,
} from "services/form/PhoneInputMask/constants";

type TPhoneInputMaskProps = {
  defaultValue?: string | number | readonly string[];
  hasPlaceholder?: boolean;
  hasLabel?: boolean;
  isDisabled?: boolean;
  mask?: string;
  placeholder?: string;
} & Omit<TInputMaskProps, "mask">;

const PhoneInputMaskComponent: FC<TPhoneInputMaskProps> = ({
  beforeMaskedStateChange,
  defaultValue,
  hasLabel = true,
  hasPlaceholder = true,
  isDisabled = false,
  label,
  name,
  mask = PHONE_MASK,
  maskPlaceholder = "",
  placeholder,
  ...props
}) => {
  const handleBeforeMaskedStateChange = ({
    currentState,
    nextState,
  }: BeforeMaskedStateChangeStates) => {
    // '+7 (+7' нужно заменить на +7. Когда пользователь просто вставляет номер телефона в поле,
    // то к нему добавляется +7 из маски и номер телефона ломается
    if (currentState?.value.includes(PAST_BUG_PHONE)) {
      return {
        ...currentState,
        value: currentState.value.replace(PAST_BUG_PHONE, "+7"),
      };
    }
    if (currentState?.value.includes(PAST_BUG_8_PHONE)) {
      return {
        ...currentState,
        value: currentState.value.replace(PAST_BUG_8_PHONE, "+7"),
      };
    }
    return nextState;
  };

  return (
    <InputMask
      {...props}
      beforeMaskedStateChange={beforeMaskedStateChange ?? handleBeforeMaskedStateChange}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      label={hasLabel && label ? label : undefined}
      mask={mask}
      maskPlaceholder={maskPlaceholder}
      name={name}
      placeholder={hasPlaceholder && placeholder ? placeholder : undefined}
    />
  );
};

export const PhoneInputMask = memo(PhoneInputMaskComponent);
