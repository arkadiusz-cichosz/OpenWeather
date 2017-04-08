let myID = ''; //To get access to weather API you need an API key whatever account you choose from Free to Enterprise. http://openweathermap.org/appid
widgetInit();
let openweatherData = readCookie();
requestAPI(openweatherData.cityName, openweatherData.countryCode, myID);
setInterval(function() {
	let openweatherData = readCookie();
	requestAPI(openweatherData.cityName, openweatherData.countryCode, myID);
	console.log('Data is updated');
},180000);

