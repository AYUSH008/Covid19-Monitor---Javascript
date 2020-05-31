$(document).ready(function () {
    // Get JSON data from url
    

    $.getJSON("https://api.covid19india.org/data.json", function (data) {
      var states = [];
      var confirmed = [];
      var recovered = [];
      var deaths = [];

  
      var total_active;
      var total_confirmed;
      var total_recovered;
      var total_deaths;
  
      // Take the first element in statewise array and add the objects values into the above variables
      total_active = data.statewise[0].active;
      total_confirmed = data.statewise[0].confirmed;
      total_recovered = data.statewise[0].recovered;
      total_deaths = data.statewise[0].deaths;
  

      
      // The each loop select a single statewise array element
      // Take the data in that array and add it to variables
      $.each(data.statewise.slice(0,6), function (id, obj) {
        states.push(obj.state);
        confirmed.push(obj.confirmed);
        recovered.push(obj.recovered);
        deaths.push(obj.deaths);
      });
      
  
      // Remove the first element in the states, confirmed, recovered, and deaths as that is the total value
      states.shift();
      confirmed.shift();
      recovered.shift();
      deaths.shift();

      

  
      // Chart initialization
      
      var statechart = document.getElementById("statechart").getContext("2d");
      var statechart = new Chart(statechart, {
        reponsive: true,
        maintainAspectRatio: false,
        zoomEnabled: true,
        type: "line",
        data: {
          labels: states,
          datasets: [
            {
              label: "Confirmed Cases",
              data: confirmed,
              backgroundColor: "#f1c40f",
              minBarLength: 100,
            },
            {
              label: "Recovered",
              data: recovered,
              backgroundColor: "#2ecc71",
              minBarLength: 100,
            },
            {
              label: "Deceased",
              data: deaths,
              backgroundColor: "#e74c3c",
              minBarLength: 100,
            },
          ],
        },
        option: { 
           
        },
      });
    });


    function beforePrintHandler () {
      for (var id in statechart.instances) {
          myChart.instances[id].resize();
      }
  }
  });