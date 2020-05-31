$(document).ready(function () {

    $.getJSON("https://api.rootnet.in/covid19-in/stats/testing/latest", function (data) {

        var test = data.data.totalSamplesTested;

        console.log(test);

        $("#tested").append(test);



    });


});

