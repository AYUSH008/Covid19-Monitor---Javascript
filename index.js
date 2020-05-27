$(document).ready(function(){

    $.getJSON("https://api.rootnet.in/covid19-in/hospitals/beds", function(data){
    var states=[];
    var hospitals =[];
    var beds =[];


    var total_hospitals;
    var total_beds;

    total_hospitals = data.data.summary.totalHospitals;
    total_beds = data.data.summary.totalBeds;

    $("#hospitals").append(total_hospitals);
    $("#beds").append(total_beds);


$.each(data.data.regional, function(id, obj){

    states.push(obj.state);
    hospitals.push(obj.totalHospitals);
    beds.push(obj.totalBeds);

});

    });
});