
$(document).ready(function(){
    $.getJSON("https://api.rootnet.in/covid19-in/stats/testing/latest" , function(data){
    
    
    var sample = data.data.totalSamplesTested;
    var update = data.data.day;

    
    $('#sampletested').append(sample);
    $('#updated').append(update);



    });

});
    //fetch("https://api.covid19india.org/data.json")