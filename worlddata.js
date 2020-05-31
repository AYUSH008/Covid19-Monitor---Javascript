$(document).ready(function () {

    $.getJSON("https://covid19.mathdro.id/api", function (data) {

        var confirmedworld = data.confirmed.value;
        var recoverdworld = data.recovered.value;
        var deathworld = data.deaths.value;

var worldchart2 = document.getElementById("worldchart2").getContext("2d");
var worldchart2 = new Chart(worldchart2, {
    responsive: true,
    type: 'line',
    data: {
        labels: ['Confirmed','Recovered', 'Death'],
        datasets: [{

            label: "Case in World",
            backgroundColor: ["rgb(230, 184, 0)" , "rgb(240, 112, 0)" , "rgb(255, 30, 5)"] ,
            fill: false,
            lineTension: 0.1,
            backgroundColor: ["rgb(230, 184, 0)" , "rgb(240, 112, 0)" , "rgb(255, 30, 5)","rgb(54, 162, 235)"] ,
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle:'butt',
            borderDash :[],
            borderDashOffset: 0.0,
            BorderJoinStyle: 'miter',
            pointBorderColor:"rgba(75,192,192,1)",
            pointBackgroundColor:"#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor:"rgba(75,192,192,1)",
            pointHoverBorderColor:"rgba(220,220,220,1)",
            pointHoverBorderWidth:1,
            pointRadius:2,
            pointHitRadius:10,
            data: [confirmedworld, recoverdworld, deathworld    ],
        }]
    },
    
});


    });


});