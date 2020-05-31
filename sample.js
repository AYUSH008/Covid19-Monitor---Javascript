
$(document).ready(function () {
    $.getJSON("https://api.covid19india.org/data.json", function (data) {



        var total_deaths = data.statewise[0].deaths;
        var total_confirmed = data.statewise[0].confirmed;
        var total_recovered = data.statewise[0].recovered;

        var dailyconfirmed = [];
        var dailydeath = [];
        var dailyrecovered = [];
        

        $.each(data.cases_time_series.slice(110, 120), function (id, obj) {
            dailyconfirmed.push(obj.dailyconfirmed);
            dailydeath.push(obj.dailydeceased);
            dailyrecovered.push(obj.dailyrecovered);

        });
        
        var dchart2 = document.getElementById("dchart2").getContext("2d");
        var dchart2 = new Chart(dchart2, {
            responsive: true,
            type: 'line',
            data: {
                labels: ['confirmed', 'recovered', 'deaths'],
                datasets: [{

                    label: 'Last 10 Days Cases in India',
                    backgroundColor: ['#f1c40f', '#e67e22', '#e74c3c'],
                    data: [dailyconfirmed, dailyrecovered, dailydeath]
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,    // minimum will be 0, unless there is a lower value.

                        }
                    }]
                }

            },
        });







        var dchart1 = document.getElementById("dchart1").getContext("2d");
        var dchart1 = new Chart(dchart1, {
            responsive: true,
            type: 'horizontalBar',
            data: {
                labels: ['confirmed', 'recovered', 'deaths'],
                datasets: [{

                    label: 'Data of India',
                    backgroundColor: ['#f1c40f', '#e67e22', '#e74c3c'],
                    data: [total_confirmed, total_recovered, total_deaths]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Confirmed Vs Recovered Vs Deaths'

                },
            },
        });

    });

});
    //fetch("https://api.covid19india.org/data.json")