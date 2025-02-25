import { type ChangeEvent, type FC, useRef, useState } from "react";
import { Input, RadioButton } from "uikit";
import { EHobby } from "./enum";
import "./RadioButtonPage.scss";

export const RadioButtonPage: FC = () => {
  const [hobby, setHobby] = useState<EHobby | undefined>();
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeHobby = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value as EHobby;
    setHobby(selectedValue);
    if (selectedValue === EHobby.Other && inputRef?.current && "focus" in inputRef.current) {
      inputRef.current.focus();
    } else {
      setInputValue(undefined);
    }
  };

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = () => {
    setHobby(EHobby.Other);
  };

  return (
    <div className="RadioButtonPage">
      <div className="RadioButtonPage-Content">
        <RadioButton
          checked={hobby === EHobby.Football}
          label="Football"
          name={EHobby.Football}
          onChange={handleChangeHobby}
          value={EHobby.Football}
        />
        <RadioButton
          checked={hobby === EHobby.Swimming}
          label="Swimming"
          name={EHobby.Swimming}
          onChange={handleChangeHobby}
          value={EHobby.Swimming}
        />
        <RadioButton
          checked={hobby === EHobby.Other}
          label="Other"
          name={EHobby.Other}
          onChange={handleChangeHobby}
          value={EHobby.Other}
        />
        <Input
          name={EHobby.Other}
          onChange={handleChangeInputValue}
          onFocus={handleInputFocus}
          placeholder="Your hobby"
          ref={inputRef}
          type="text"
          value={inputValue}
        />
      </div>
      <div>
        <pre>Hobby: {JSON.stringify(hobby, null, 2)}</pre>
      </div>
      <div>
        <pre>Input value: {JSON.stringify(inputValue, null, 2)}</pre>
      </div>
    </div>
  );
};
