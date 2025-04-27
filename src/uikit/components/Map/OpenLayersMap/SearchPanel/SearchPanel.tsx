import clsx from "clsx";
import { type ChangeEvent, type FC, memo } from "react";
import { Icon } from "uikit";
import type { TNominatimItem } from "../types";
import "./SearchPanel.scss";

type TProps = {
  hasSearched?: boolean;
  isOpen?: boolean;
  onChangeInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePlace?: (item: TNominatimItem) => void;
  onClear?: () => void;
  onSearch?: () => void;
  suggestedPlaces?: TNominatimItem[];
  query?: string;
};

const SearchPanelComponent: FC<TProps> = ({
  hasSearched,
  isOpen,
  onChangeInput,
  onChangePlace,
  onClear,
  onSearch,
  suggestedPlaces,
  query,
}) => {
  const displayedPlaces = (suggestedPlaces ?? []).slice(0, 5);
  console.log("displayedPlaces: ", displayedPlaces);

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
          placeholder="Enter city, street..."
          type="text"
          value={query}
        />
        <div className="SearchPanel-Icon SearchPanel-SearchIcon">
          <Icon onClick={onSearch} type="Search" />
        </div>
        <div className="SearchPanel-Icon SearchPanel-CloseIcon">
          <Icon onClick={onClear} type="Close" />
        </div>
      </div>
      {isOpen && (
        <div className="SearchPanel-SuggestedPlaces">
          <div className="SearchPanel-SuggestedPlaces-List">
            {(displayedPlaces ?? []).map((place) => (
              <div
                key={place.place_id}
                className="SearchPanel-SuggestedPlaces-ListItem"
                onClick={() => onChangePlace?.(place)}
              >
                {place.display_name}
              </div>
            ))}
            {hasSearched && !displayedPlaces?.length && (
              <div className="SearchPanel-SuggestedPlaces-NotFound">Nothing found.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

SearchPanelComponent.displayName = "SearchPanel";

export const SearchPanel = memo(SearchPanelComponent);
