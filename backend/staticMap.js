// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 21.814277468810232, lng: -102.76965344528594 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 17,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Universidad Tecnologica de Calvillo",
  });
}

initMap();