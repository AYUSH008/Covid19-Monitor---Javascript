$(document).ready(function () {
    // Get JSON data from url


    $.getJSON("https://api.covid19india.org/data.json", function (data) {
        var states = [];
        var confirmed = [];
        var recovered = [];
        var loc = [];
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
        total_loc = data.statewise[0].loc;


        state1 = data.statewise[1].state;
        confirmed1 = data.statewise[1].confirmed;
        recovered1 = data.statewise[1].recovered;
        active1 = data.statewise[1].active;
        deaths1 = data.statewise[1].deaths;

        
        state2 = data.statewise[2].state;
        confirmed2 = data.statewise[2].confirmed;
        recovered2 = data.statewise[2].recovered;
        active2 = data.statewise[2].active;
        deaths2 = data.statewise[2].deaths;

        
        state3 = data.statewise[3].state;
        confirmed3 = data.statewise[3].confirmed;
        recovered3 = data.statewise[3].recovered;
        active3 = data.statewise[3].active;
        deaths3 = data.statewise[3].deaths;

        
        state4 = data.statewise[4].state;
        confirmed4 = data.statewise[4].confirmed;
        recovered4 = data.statewise[4].recovered;
        active4 = data.statewise[4].active;
        deaths4 = data.statewise[4].deaths;
        // The each loop select a single statewise array element
        //pie chart 

        var myPieChart1 = document.getElementById("myPieChart1").getContext("2d");
        
        

        var myPieChart1 = new Chart(myPieChart1, {
            type: 'pie',
            data: {
                labels: ['Confirmed', 'Recovered', 'Deaths', 'Active'],
                datasets: [{
                    label: 'points',
                    backgroundColor: ['#f1c40f', '#e67e22', '#16a085','#4D4DFF'],
                    data: [confirmed1, recovered1, deaths1, active1]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: state1
                }
            }
        });

        var myPieChart2 = document.getElementById("myPieChart2").getContext("2d");
        var myPieChart2 = new Chart(myPieChart2, {
            type: 'pie',
            data: {
                labels: ['Confirmed', 'Recovered', 'Deaths','Active'],
                datasets: [{
                    label: 'points',
                    backgroundColor: ['#f1c40f', '#e67e22', '#16a085', '#4D4DFF'],
                    data: [confirmed2, recovered2, deaths2, active2]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: state2
                }
            }
        });
        var myPieChart3 = document.getElementById("myPieChart3").getContext("2d");
        var myPieChart3 = new Chart(myPieChart3, {
            type: 'pie',
            data: {
                labels: ['Confirmed', 'Recovered', 'Deaths', 'Active'],
                datasets: [{
                    label: 'points',
                    backgroundColor: ['#f1c40f', '#e67e22', '#16a085', '#4D4DFF'],
                    data: [confirmed3, recovered3, deaths3, active3]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: state3
                }
            }
        });

        var myPieChart4 = document.getElementById("myPieChart4").getContext("2d");

        var myPieChart4 = new Chart(myPieChart4, {
            
            type: 'pie',
            data: {
                labels: ['Confirmed', 'Recovered', 'Deaths', 'Active'],
                datasets: [{
                    label: 'points',
                    backgroundColor: ['#f1c40f', '#e67e22', '#16a085','#4D4DFF'],
                    data: [confirmed4, recovered4, deaths4, active4]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: state4
                }
            }
        });

    })
});