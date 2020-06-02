$(document).ready(function () {

    $.getJSON("https://api.rootnet.in/covid19-in/stats/testing/latest", function (data) {

        var test = data.data.totalSamplesTested;
        var day = data.data.day;

        console.log(test);

        $("#tested").append(test);
        $("#day").append(day);



    });


});

