import {climateMap, getClimateInfo, kelvintoCentigrados} from "../weatherAPI.js";


window.addEventListener('load', () => {
    initializeMap()



async function initializeMap() {
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const position = { lat: 38.569, lng: -4.052 };
    let map

    // The map, centered
    map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to search climate!",
        position: position,
    });

    infoWindow.open(map);

    map.addListener("click", async (mapsMouseEvent) => {
        mapClickListener(mapsMouseEvent)
    })
}

async function mapClickListener(event) {
    const lat = event.latLng.lat()
    const lon = event.latLng.lng()

    const infoWindow = new google.maps.InfoWindow({
        position: event.latLng
    });

    const data = await getClimateInfo(
        lat,
        lon
    )

    infoWindow.setContent(
        `Temperature: ${kelvintoCentigrados(data.main.temp)}, 
            Max: ${kelvintoCentigrados(data.main.temp_max)}, 
            Min: ${kelvintoCentigrados(data.main.temp_min)}`
    );
    climateMap(lat, lon)
    infoWindow.open(map);
}

initializeMap();

});