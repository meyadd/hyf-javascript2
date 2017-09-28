function button_clicked(){
	console.log('you clicked me!');
	
	let city_name = document.getElementById('city_name').value;
	let country_code = document.getElementById('country_code').value;
	if(!city_name || !country_code){
		alert('please enter city and country code');
		return;
	}
	getWeather(city_name , country_code);
}
function getWeather(city_name , country_code){
	let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "," + country_code + "&appid=5e28086b2a257182c22b3d75c81e658b";
	httpGetAsync(url , renderHtml);
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send();
}
function renderHtml(data){
	let obj = JSON.parse(data);
	console.log(obj);
	
	let city_info = document.getElementById('city_info');
	city_info.innerHTML = '';
	
	let city_name = document.createElement('h3');
	city_name.setAttribute("class","city");
	city_name.innerHTML = obj.name + " - " + obj.sys.country;
	city_info.appendChild(city_name);
	
	// container //
	let coord_container = document.createElement('div');
	coord_container.setAttribute("class","container");
	city_info.appendChild(coord_container);
	
	let coord_label = document.createElement('p');
	coord_container.appendChild(coord_label);
	coord_label.setAttribute("class","label");
	coord_label.innerHTML = "City geo location";
	
	let coord_ul = document.createElement('ul');
	coord_container.appendChild(coord_ul);
	
	let coord_li1 = document.createElement('li');
	coord_ul.appendChild(coord_li1);
	
	let coord_li2 = document.createElement('li');
	coord_ul.appendChild(coord_li2);
	
	coord_li1.innerHTML = "longitude: " + obj.coord.lon;
	coord_li2.innerHTML = "latitude: " + obj.coord.lat;
	
	// weather //
	let weather_container = document.createElement('div');
	weather_container.setAttribute("class","container");
	city_info.appendChild(weather_container);
	
	let weather_label = document.createElement('p');
	weather_container.appendChild(weather_label);
	weather_label.setAttribute("class","label");
	weather_label.innerHTML = "Weather condition";
	
	let weather_ul = document.createElement('ul');
	weather_container.appendChild(weather_ul);
	
	let weather_li1 = document.createElement('li');
	weather_ul.appendChild(weather_li1);
	
	let weather_li2 = document.createElement('li');
	weather_ul.appendChild(weather_li2);
	
	weather_li1.innerHTML = "main : " + obj.weather[0].main;
	weather_li2.innerHTML = "description : " + obj.weather[0].description;
	
	// main //
	let main_container = document.createElement('div');
	main_container.setAttribute("class","container");
	city_info.appendChild(main_container);
	
	let main_label = document.createElement('p');
	main_container.appendChild(main_label);
	main_label.setAttribute("class","label");
	
	let main_txt = document.createElement('div');
	main_label.appendChild(main_txt);
	main_txt.innerHTML = "Main Info";
	
	let main_icon = document.createElement('img');
	main_label.appendChild(main_icon);
	main_icon.setAttribute("class","icon");
	main_icon.src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
	
	let mail_ul = document.createElement('ul');
	main_container.appendChild(mail_ul);
	
	let main_li1 = document.createElement('li');
	mail_ul.appendChild(main_li1);
	
	let main_li2 = document.createElement('li');
	mail_ul.appendChild(main_li2);
	
	let main_li3 = document.createElement('li');
	mail_ul.appendChild(main_li3);
	
	let main_li4 = document.createElement('li');
	mail_ul.appendChild(main_li4);
	
	let main_li5 = document.createElement('li');
	mail_ul.appendChild(main_li5);
	
	main_li1.innerHTML = "Temperature : " + obj.main.temp + " Kelvin / " + toCelus(obj.main.temp) + " ℃";
	main_li2.innerHTML = "Pressure  : " + obj.main.pressure + " hPa";
	main_li3.innerHTML = "Humidity : " + obj.main.humidity + " %";
	main_li4.innerHTML = "Minimum temperature : " + obj.main.temp_min + " Kelvin / " + toCelus(obj.main.temp_min) + " ℃";
	main_li5.innerHTML = "Maximum temperature : " + obj.main.temp_max + " Kelvin / " + toCelus(obj.main.temp_max) + " ℃";
	
	// Visibility //
	let visibility_container = document.createElement('div');
	visibility_container.setAttribute("class","container");
	city_info.appendChild(visibility_container);
	
	let visibility_label = document.createElement('p');
	visibility_container.appendChild(visibility_label);
	visibility_label.setAttribute("class","label");
	visibility_label.innerHTML = "Visibility ";
	
	let visibility_ul = document.createElement('ul');
	visibility_container.appendChild(visibility_ul);
	
	let visibility_li1 = document.createElement('li');
	visibility_ul.appendChild(visibility_li1);
	
	visibility_li1.innerHTML = "visibility : " + obj.visibility + " meter";
	
	// Wind //
	let wind_container = document.createElement('div');
	wind_container.setAttribute("class","container");
	city_info.appendChild(wind_container);
	
	let wind_label = document.createElement('p');
	wind_container.appendChild(wind_label);
	wind_label.setAttribute("class","label");
	wind_label.innerHTML = "Wind ";
	
	let wind_ul = document.createElement('ul');
	wind_container.appendChild(wind_ul);
	
	let wind_li1 = document.createElement('li');
	wind_ul.appendChild(wind_li1);
	
	let wind_li2 = document.createElement('li');
	wind_ul.appendChild(wind_li2);
	
	wind_li1.innerHTML = "wind speed : " + obj.wind.speed + " miles/hour";
	wind_li2.innerHTML = "wind direction : " + obj.wind.deg  + " degrees ";
}
function toCelus(str){
	return Math.round(( Number(str) - 273.15) * 10)   / 10;
}
getWeather("Amsterdam" , "NL");