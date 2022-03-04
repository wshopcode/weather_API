//var city = document.getElementById("city");//
//var city = "Nairobi"//

let city = document.getElementById("city").value;  


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=e09aef129fc60761da4e260ae7bf86c1", function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].description;

    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp ').append(temp);
});