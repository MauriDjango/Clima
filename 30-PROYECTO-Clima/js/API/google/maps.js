

window.addEventListener('load', async () => {
    const {Map} = await google.maps.importLibrary("maps")
    const position = { lat: 38.569, lng: -4.052 }
    const map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: position,
        mapId: "climate_map",
    });
    const marker = new google.maps.Marker({
            position: position,
            map,
            title: "marker",
        })

    map.addListener('click', (event) => {
        console.log(event)
        marker.setPosition(event.latLng)
    })
})
