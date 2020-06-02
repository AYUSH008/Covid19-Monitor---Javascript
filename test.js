function update(){

  fetch("https://www.trackcorona.live/api/countries")
  .then(response => response.json())
  .then(rsp => {
      console.log(rsp.data)
      rsp.data.forEach(element => {
          latitude = element.latitude;
          longitude = element.longitude;
       
          cases = element.confirmed;
          if(cases>5000){
              color = "rgb(255,0,0)";
          }
          else{
              color= `rgb(${cases},0,0)`;
          }

          map.on('mousemove', function(element) {
    
            document.getElementById('info').innerHTML =
                // e.point is the x, y coordinates of the mousemove event relative
                // to the top-left corner of the map
                JSON.stringify(element.latitude) +
                '<br />' +
                // e.lngLat is the longitude, latitude geographical position of the event
                JSON.stringify(element.longitude.wrap());
              })
          //mapping is remaining

      new mapboxgl.Marker({
              draggable: false,
              color: color,
              })
              .setLngLat([longitude, latitude])
              .addTo(map);

      });
 



  
});
}

update();