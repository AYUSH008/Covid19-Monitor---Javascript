$(document).ready(function(){
    //get json data
    $.getJSON("https://api.covid19india.org/data.json", function(data){

    var states = [];
    var confirmed = [];
    var recovered = [];
    var deaths = [];

    //console.log(data.statewise);

    $.each(data.statewise, function(id,obj){
        states.push(obj.state);
        states.push(obj.confirmed);
        states.push(obj.recovered);
        states.push(obj.deaths);
    })

    });
});