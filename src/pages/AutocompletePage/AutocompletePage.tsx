import React from "react";
import type { FC } from "react";
import clsx from "clsx";
import isNil from "lodash/isNil";
import { Title } from "components";
import { ETheme, Select, useThemeContext } from "uikit";
import { StyledDropdownIndicator } from "../SelectPage/styles";
import { usePosts } from "./hooks";
import "./AutocompletePage.scss";

export const AutocompletePage: FC = () => {
  const themeState = useThemeContext();
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light;
  const { isSelectOpened, onBlur, onChange, onFocus, onLoadOptions, selectedOption } = usePosts();

  return (
    <section>
      <Title>Autocomplete</Title>
      <Select
        className={clsx("AutocompletePage-Select", {
          "AutocompletePage-Select__active": isSelectOpened,
        })}
        components={{ DropdownIndicator: StyledDropdownIndicator }}
        isAutocomplete={true}
        isMulti={false}
        loadOptions={onLoadOptions}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        theme={theme}
        value={selectedOption}
      />
      <div>
        <pre>{JSON.stringify(selectedOption, null, 2)}</pre>
      </div>
    </section>
  );
};
