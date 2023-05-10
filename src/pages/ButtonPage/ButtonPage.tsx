import React from "react";
import type { FC, MouseEvent } from "react";
import { Hr, Title } from "components";
import { Button, IconButton } from "uikit";

export const ButtonPage: FC = () => {
  const handleButtonClick = (event: MouseEvent) => {
    console.log("[button click event]", event);
  };

  return (
    <section>
      <Title>Button</Title>
      <Button isDisabled={false} onClick={handleButtonClick}>
        Send
      </Button>
      <Hr />
      <Title>Button disabled</Title>
      <Button isDisabled onClick={handleButtonClick}>
        Send
      </Button>
      <Hr />
      <Title>Button with icon</Title>
      <Button typeIcon="Edit" onClick={handleButtonClick}>
        Create a record
      </Button>
      <Hr />
      <Title>Button with icon and disabled</Title>
      <Button typeIcon="Edit" isDisabled onClick={handleButtonClick}>
        Create a record
      </Button>
      <Hr />
      <Title>IconButton</Title>
      <IconButton typeIcon="Telegram" onClick={handleButtonClick} />
      <Hr />
      <Title>IconButton Disabled</Title>
      <IconButton isDisabled typeIcon="Telegram" />
    </section>
  );
};
