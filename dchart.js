
$(document).ready(function () {
    $.getJSON("https://api.rootnet.in/covid19-in/stats/latest", function (data) {


        var confirmed1 = data.data.summary.total;
        var recovered1 = data.data.summary.discharged;
        var deaths1 = data.data.summary.deaths;


        console.log(confirmed1);

        var dchart1 = document.getElementById("dchart1").getContext("2d");
        var dchart1 = new chart(dchart1, {
            type: 'pie',
            data: {
                labels: ['confirmed', 'Recovered'],
                datasets: [{
                    label: 'points',
                    backgroundColor: ['#f1c40f', '#e67e33'],
                    data: [confirmed1, recovered1]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'hey'
                }
            }
        })



    });
});
    //fetch("https://api.covid19india.org/data.json")