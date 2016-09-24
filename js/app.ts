var APPID = "5b5679716bb98722f6ef49d25de425f6";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;


function update(weather) {

     alert(weather.description);
  document.getElementById("description").innerHTML = weather.description;
 document.getElementById("humidity").innerHTML= weather.humidity;
    document.getElementById("wind").innerHTML = weather.wind;
   document.getElementById("direction").innerHTML = weather.direction;
     document.getElementById("location").innerHTML = weather.location;
   document.getElementById("temperature").innerHTML = weather.temp;
      
}

 function weatherapp(){
    loc = (<HTMLInputElement>document.getElementById("box_location")).value;
   
    if(loc ==  '')
    {
        loc = 'Auckland';
    }
    document.getElementById("location").innerHTML =  loc;
  
   //  loc = document.getElementById("location");
    //temp = document.getElementById("temperature");
    //humidity = document.getElementById("humidity");
    //wind = document.getElementById("wind");
    //direction = document.getElementById("direction");

    updateByCityName(loc);
 
}


function updateByCityName(location){
 
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
	"q=" + location +
	"&APPID=" + APPID;
      
    sendRequest(url);    
}



function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
	class weathercontent {
   name:string;
   code:number;
   description:string;
   wind:number;
   direction:string;
   location:string;
   temp:number;
   humidity:number;
   
            };
            
 var weather = new weathercontent;
        
	    weather.code = data.weather[0].id;
        weather.description = data.weather[0].description;
	    weather.humidity = data.main.humidity;
	    weather.wind = data.wind.speed;
	    /* NEW */
	    weather.direction = degreesToDirection(data.wind.deg)
	    weather.location = data.name;
	    /* NEW */
	    weather.temp = K2F(data.main.temp);		
	    update(weather);
	}
    };

    xmlhttp.open("GET", url, true);
    //sending to weatherapp
    xmlhttp.send();    
}

function degreesToDirection(degrees){
    var range = 360/16;
    var low = 360 - range/2;
    var high = (low + range) % 360;
    var angles = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    for( var i in angles ) {
	if(degrees >= low && degrees < high){
	    console.log(angles[i]);
	    return angles[i];
	    //console.log("derp");
	}
	low = (low + range) % 360;
	high = (high + range) % 360;
    }
    return "N";
    
}

function K2F(k){
    return Math.round(k*(9/5)-459.67);
}

function K2C(k){
    return Math.round(k - 273.15);
}

