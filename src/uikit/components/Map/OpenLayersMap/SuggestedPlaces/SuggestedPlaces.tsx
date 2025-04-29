import { type FC, memo } from "react";
import { ETypographyVariant, Icon, Typography } from "uikit";
import type { TNominatimItem } from "../types";
import "./SuggestedPlaces.scss";
import { SignpostIcon } from "../../../../assets/icons";

type TProps = {
  hasSearched?: boolean;
  onChangePlace?: (place: TNominatimItem) => void;
  places?: TNominatimItem[];
};

const SuggestedPlacesComponent: FC<TProps> = ({ hasSearched, onChangePlace, places }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "administrative":
        return <Icon type="GlobeLocationPin" />;
      case "attraction":
        return <Icon type="Attractions" />;
      case "city":
        return <Icon type="City" />;
      case "hamlet":
        return <Icon type="Cottage" />;
      case "neighbourhood":
        return <Icon type="GlobeLocationPin" />;
      case "peak":
        return <Icon type="Landscape" />;
      case "river":
        return <Icon type="River" />;
      case "village":
        return <Icon type="Cottage" />;
      default:
        return <Icon type="Signpost" />;
    }
  };

  return (
    <div className="SuggestedPlaces">
      <div className="SuggestedPlaces-List">
        {(places ?? []).map((place) => (
          <div
            key={place.place_id}
            className="SuggestedPlaces-ListItem"
            onClick={() => onChangePlace?.(place)}
          >
            <div className="SuggestedPlaces-ListItem-Icon">{getIcon(place.type)}</div>
            <div className="SuggestedPlaces-ListItem-Title">
              <Typography variant={ETypographyVariant.TextB3Regular}>
                {place.display_name}
              </Typography>
            </div>
          </div>
        ))}
        {hasSearched && !places?.length && (
          <div className="SuggestedPlaces-NotFound">Nothing found.</div>
        )}
      </div>
    </div>
  );
};

export const SuggestedPlaces = memo(SuggestedPlacesComponent);
