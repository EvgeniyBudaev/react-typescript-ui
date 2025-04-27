// Тип объекта ответа от сервиса Nominatim
export type TNominatimItem = {
  addresstype?: string; // Тип адреса (например, "city")
  boundingbox?: [string, string, string, string]; // Границы местоположения (минимальная и максимальная широта и долгота)
  class?: string; // Категория (например, "place")
  display_name?: string; // Полное название места (например, "Москва, Россия")
  importance?: number; // Важность места
  lat?: string; // Широта в виде строки (например, "55.7558")
  lon?: string; // Долгота в виде строки (например, "37.6176")
  name?: string; // Название места (например, "Москва")
  osm_id?: number; // Идентификатор места в OpenStreetMap
  osm_type?: string; // Тип объекта в OpenStreetMap (например, "node")
  place_id?: number; // Идентификатор места в OpenStreetMap
  place_rank?: number; // Ранг места
  type: string; // Подкатегория (например, "city")
};
