import clsx from "clsx";
import { type ChangeEvent, memo } from "react";

import { Icon } from "uikit";

import { SuggestedPlaces } from "../SuggestedPlaces";
import type { TNominatimItem } from "../types";
import "./SearchPanel.scss";

type TProps = {
  hasSearched?: boolean;
  isLoading?: boolean;
  isOpen?: boolean;
  onChangeInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePlace?: (place: TNominatimItem) => void;
  onClear?: () => void;
  onOpen?: () => void;
  onSearch?: () => void;
  suggestedPlaces?: TNominatimItem[];
  query?: string;
};

const SearchPanelComponent: FC<TProps> = ({
  hasSearched,
  isLoading,
  isOpen,
  onChangeInput,
  onChangePlace,
  onClear,
  onOpen,
  onSearch,
  suggestedPlaces,
  query,
}) => {
  const displayedPlaces = (suggestedPlaces ?? []).slice(0, 5);

  return (
    <div className="SearchPanel">
      <div
        className={clsx("SearchPanel-View", {
          "SearchPanel-View__isOpen": isOpen,
        })}
      >
        <div className="SearchPanel-Icon SearchPanel-LocationIcon">
          <Icon type="Location" />
        </div>
        <input
          className="SearchPanel-Input"
          onChange={onChangeInput}
          onFocus={onOpen}
          placeholder="Enter city, street..."
          type="text"
          value={query}
        />
        <div className="SearchPanel-Icon SearchPanel-SearchIcon">
          {isLoading && <Icon type="Spinner" />}
          {!isLoading && <Icon onClick={onSearch} type="Search" />}
        </div>
        <div className="SearchPanel-Icon SearchPanel-CloseIcon">
          <Icon onClick={onClear} type="Close" />
        </div>
      </div>
      {isOpen && (
        <SuggestedPlaces
          hasSearched={hasSearched}
          onChangePlace={onChangePlace}
          places={displayedPlaces}
        />
      )}
    </div>
  );
};

SearchPanelComponent.displayName = "SearchPanel";

export const SearchPanel = memo(SearchPanelComponent);
