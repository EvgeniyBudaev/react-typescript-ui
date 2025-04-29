import debounce from "lodash/debounce";
import { Map, View } from "ol";
import type { Coordinate } from "ol/coordinate";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import "ol/ol.css";
import { type ChangeEvent, type FC, useCallback, useEffect, useRef, useState } from "react";

import { ControlsPanel } from "./ControlsPanel";
import { SearchPanel } from "./SearchPanel";
import type { TNominatimItem } from "./types";
import "./OpenLayersMap.scss";
import isEmpty from "lodash/isEmpty";

type TProps = {
  latitude?: number;
  longitude?: number;
};

export const OpenLayersMap: FC<TProps> = ({ latitude, longitude }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [olMap, setOlMap] = useState<Map | null>(null);
  const [clickedCoordinate, setClickedCoordinate] = useState<Coordinate>();
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuggestedPlacesOpen, setIsSuggestedPlacesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedPlaces, setSuggestedPlaces] = useState<TNominatimItem[]>([]);
  const vectorSourceRef = useRef<VectorSource>(new VectorSource());
  const vectorLayerRef = useRef<VectorLayer<VectorSource>>(
    new VectorLayer({
      source: vectorSourceRef.current,
    }),
  );
  const DEFAULT_LATITUDE = 55.75449;
  const DEFAULT_LONGITUDE = 37.6191;

  useEffect(() => {
    const map = new Map({
      target: mapRef.current as HTMLDivElement,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayerRef.current, // Добавляем векторный слой
      ],
      view: new View({
        center: fromLonLat([longitude || DEFAULT_LONGITUDE, latitude || DEFAULT_LATITUDE]),
        zoom: longitude && latitude ? 10 : 2,
      }),
    });

    map.on("click", (e) => {
      setClickedCoordinate(e.coordinate);
      addMarker(e.coordinate);
    });

    setOlMap(map);

    return () => map.setTarget(undefined);
  }, [latitude, longitude]);

  const setDefaultLocation = () => {
    if (latitude && longitude && olMap) {
      const coordinate = fromLonLat([longitude, latitude]);
      addMarker(coordinate);

      // Центрируем карту на маркере
      olMap.getView().setCenter(coordinate);
      olMap.getView().setZoom(10);
    }
  };

  // Эффект для добавления маркера при изменении latitude/longitude
  useEffect(() => {
    setDefaultLocation();
  }, [latitude, longitude, olMap]);

  const addMarker = (coordinate: Coordinate) => {
    // Очищаем предыдущие маркеры
    vectorSourceRef.current.clear();

    // Создаем новую точку (маркер)
    const marker = new Feature({
      geometry: new Point(coordinate),
    });

    // Стилизуем маркер
    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "/images/marker.png",
          height: 48,
        }),
      }),
    );

    // Добавляем маркер в источник
    vectorSourceRef.current.addFeature(marker);
  };

  // Функция для выполнения запроса с повторными попытками
  const fetchWithRetry = async (query: string, retries = 3) => {
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query,
      )}`;
      const response = await fetch(url, {
        headers: {
          "User-Agent": "Telegram dating/1.0.0",
        },
      });

      if (response.status === 429) {
        // Получаем информацию о времени ожидания из заголовков (если есть)
        const retryAfter = response.headers.get("Retry-After") || "5";
        throw new Error(`rate_limit|${retryAfter}`);
      }

      if (!response.ok) throw new Error("Network error");
      return await response.json();
    } catch (error) {
      if (retries > 0) {
        let delay = 1000;

        if (error instanceof Error && error.message.startsWith("rate_limit")) {
          const [, seconds] = error.message.split("|");
          delay = parseInt(seconds) * 1000;
        }

        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchWithRetry(query, retries - 1);
      }
      throw error;
    }
  };

  // Функция для поиска места через Nominatim API
  const fetchPlaces = async (searchQuery: string) => {
    if (isEmpty(searchQuery.trim()) || searchQuery.length < 3) return;

    try {
      setIsLoading(true);
      const data: TNominatimItem[] = await fetchWithRetry(searchQuery);
      setHasSearched(true);
      setSuggestedPlaces(data);
      setIsLoading(false);
      setIsSuggestedPlacesOpen(true);
    } catch (error) {
      console.error("Error while searching:", error);
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    await fetchPlaces(searchQuery);
  };

  const debounceHandleChangeInput = useCallback(
    debounce(async (searchQuery: string) => {
      await fetchPlaces(searchQuery);
    }, 2000),
    [],
  );

  const handleChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    await debounceHandleChangeInput(value);
  };

  const handleChangePlace = (place?: TNominatimItem) => {
    const lonStr = place?.lon;
    const latStr = place?.lat;
    if (!place || !lonStr || !latStr || !olMap) return;
    const lon = parseFloat(lonStr);
    const lat = parseFloat(latStr);
    const coordinate = fromLonLat([lon, lat]);
    addMarker(coordinate);
    olMap.getView().setCenter(coordinate);
    olMap.getView().setZoom(14);
    setIsSuggestedPlacesOpen(false);
  };

  const handleClear = () => {
    setSearchQuery("");
    setHasSearched(false);
    setIsSuggestedPlacesOpen(false);
  };

  const handleOpenSuggestedPlaces = () => {
    setIsSuggestedPlacesOpen(true);
  };

  const handleClickControl = (type: "target") => {
    if (!olMap) return;
    switch (type) {
      case "target":
        setDefaultLocation();
        break;
    }
  };

  return (
    <>
      <div className="OpenLayersMap-Visible">
        <SearchPanel
          hasSearched={hasSearched}
          isLoading={isLoading}
          isOpen={isSuggestedPlacesOpen}
          onChangeInput={handleChangeInput}
          onChangePlace={handleChangePlace}
          onClear={handleClear}
          onOpen={handleOpenSuggestedPlaces}
          onSearch={handleSearch}
          suggestedPlaces={suggestedPlaces}
          query={searchQuery}
        />
      </div>
      <div className="OpenLayersMap-Visible">
        <ControlsPanel onClick={handleClickControl} />
      </div>

      <div ref={mapRef} className="OpenLayersMap-Map"></div>

      {clickedCoordinate && (
        <span className="OpenLayersMap-Coordinates-Container">
          You clicked at: {clickedCoordinate[0].toFixed(2)} / {clickedCoordinate[1].toFixed(2)}
        </span>
      )}
    </>
  );
};
