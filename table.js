$(document).ready(function(){
$.getJSON("https://api.covid19india.org/data.json" , function(data){

var state_data = '';
$.each(data.statewise, function(key,obj){
    state_data +='<tr>';
    state_data +='<td>'+obj.state+'</td>';
    state_data +='<td>'+obj.confirmed+'</td>';
    state_data +='<td>'+obj.active+'</td>';
    state_data +='<td>'+obj.recovered+'</td>';
    state_data +='<td>'+obj.deaths+'</td>';
    state_data +='<tr>';
});
$('#detailTable').append(state_data);
});

});
//fetch("https://api.covid19india.org/data.json")