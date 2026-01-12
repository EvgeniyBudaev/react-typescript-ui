import clsx from "clsx";
import isNil from "lodash/isNil";

import { Title } from "components/Title";
import { Autocomplete, ETheme, useThemeContext } from "uikit";

import { usePosts } from "./hooks";
import "./AutocompletePage.scss";

export const AutocompletePage: FC = () => {
  const themeState = useThemeContext();
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light;
  const { isSelectOpened, onBlur, onChange, onFocus, onLoadOptions, selectedOption } = usePosts();

  return (
    <section>
      <Title>Autocomplete</Title>
      <Autocomplete
        className={clsx("AutocompletePage-Select", {
          "AutocompletePage-Select__active": isSelectOpened,
        })}
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
