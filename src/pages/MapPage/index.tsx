import { type FC } from "react";
import { Title } from "components/Title";
import { OpenLayersMap } from "uikit/components/Map/OpenLayersMap";
import "./MapPage.scss";

export const MapPage: FC = () => {
  return (
    <section>
      <Title>OpenLayers Map</Title>
      <div className="MapPage-Map">
        <OpenLayersMap latitude={55.75449} longitude={37.6191} />
      </div>
    </section>
  );
};
