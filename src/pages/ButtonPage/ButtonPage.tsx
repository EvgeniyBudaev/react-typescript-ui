import React from "react";
import type { FC, MouseEvent } from "react";
import { Button, ETypographyVariant, IconButton, Typography } from "uikit";
import "./ButtonPage.scss";

export const ButtonPage: FC = () => {
  const handleButtonClick = (event: MouseEvent) => {
    console.log("[button click event]", event);
  };

  return (
    <section className="ButtonPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Button</Typography>
      <Button isDisabled={false} onClick={handleButtonClick}>
        Send
      </Button>
      <hr />
      <Typography variant={ETypographyVariant.TextH1Medium}>Button disabled</Typography>
      <Button isDisabled onClick={handleButtonClick}>
        Send
      </Button>
      <hr />
      <Typography variant={ETypographyVariant.TextH1Medium}>Button with icon</Typography>
      <Button typeIcon="Edit" onClick={handleButtonClick}>
        Create a record
      </Button>
      <hr />
      <Typography variant={ETypographyVariant.TextH1Medium}>
        Button with icon and disabled
      </Typography>
      <Button typeIcon="Edit" isDisabled onClick={handleButtonClick}>
        Create a record
      </Button>
      <hr />
      <Typography variant={ETypographyVariant.TextH1Medium}>IconButton</Typography>
      <IconButton typeIcon="Telegram" onClick={handleButtonClick} />
      <hr />
      <Typography variant={ETypographyVariant.TextH1Medium}>IconButton Disabled</Typography>
      <IconButton isDisabled typeIcon="Telegram" />
    </section>
  );
};
