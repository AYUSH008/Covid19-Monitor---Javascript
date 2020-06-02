function updateMap() {

    fetch("https://www.trackcorona.live/api/countries")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                confirmed = element.confirmed;
      console.log(confirmed)
                cases = element.confirmed;
                if (cases > 5000) {
                    color = "rgb(255,0,0)";
                }
                else {
                    color = `rgb(${cases},0,0)`;
                }

                //mapping is remaining

                var monument = [longitude, latitude];
                var popup = new mapboxgl.Popup({ offset: 25 }).setText(
                    `confirmed case are ${rsp.data.confirmed}`
                    );

                new mapboxgl.Marker({
                    draggable: false,
                    color: color,
                })
                
                    .setLngLat([longitude, latitude])
                    .setLngLat(monument)
                    .setPopup(popup)
                    .addTo(map);

            });
        })
}
updateMap();