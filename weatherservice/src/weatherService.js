const DELAY = Math.random() * 3000;

function GetWeather(call, callback){
    console.log('Request received: '+JSON.stringify(call));

    const { city } = call.request;
    const weather = (/^[aeiouAEIOU]$/i).test(city[0]) ? 'Rainy' : 'Sunny';

    setTimeout(() => {
        callback(null, { city, weather });
    }, DELAY);
}

exports.GetWeather = GetWeather;
