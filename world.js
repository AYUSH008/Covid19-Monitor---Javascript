$(document).ready(function(){

$.getJSON("https://disease.sh/v2/all", function(data){


var casepm = data.casesPerOneMillion;
var recoverpm = data.recoveredPerOneMillion;
var deathpm = data.deathsPerOneMillion;
var activepm = data.activePerOneMillion;


console.log(casepm);

var worldchart1 = document.getElementById("worldchart1").getContext("2d");
var worldchart1 = new Chart(worldchart1, {
    responsive: true,
    type: 'doughnut',
    data: {
        labels: ['Case per million','Recovered Per Million','active Per million' , 'Death per million'],
        datasets: [{

            label: "Data Per Million in World",
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
            pointRadius:1,
            pointHitRadius:10,
            data: [casepm, recoverpm, activepm, deathpm],
        }]
    },
    
});

});



});