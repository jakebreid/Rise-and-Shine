import { fetchWeatherApi } from 'openmeteo'; //need to start HTTP server for this to work
console.log("im here");
const params = {
    latitude: 42.3732,
    longitude: 72.5199,
    current: ["temperature_2m", "relative_humidity_2m", "is_day", "rain", "showers", "snowfall", "wind_speed_10m"],
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const asyncCall = async () => await fetchWeatherApi(url, params);
  const data = asyncCall();
  
  const range = (start, stop, step) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
  
  // Process first location. Add a for-loop for multiple locations or weather models
  const response = data[0];
  
  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();
  
  const daily = response.daily();
  
  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
  
      daily: {
          time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
              (t) => new Date((t + utcOffsetSeconds) * 1000)
          ),
          weatherCode: daily.variables(0).valuesArray(),
          temperature2mMax: daily.variables(1).valuesArray(),
          temperature2mMin: daily.variables(2).valuesArray(),
          uvIndexMax: daily.variables(3).valuesArray(),
          precipitationSum: daily.variables(4).valuesArray(),
          snowfallSum: daily.variables(5).valuesArray(),
      },
  
  };
  
  // `weatherData` now contains a simple structure with arrays for datetime and weather data
  for (let i = 0; i < weatherData.daily.time.length; i++) {
      console.log(
          weatherData.daily.time[i].toISOString(),
          weatherData.daily.weatherCode[i],
          weatherData.daily.temperature2mMax[i],
          weatherData.daily.temperature2mMin[i],
          weatherData.daily.uvIndexMax[i],
          weatherData.daily.precipitationSum[i],
          weatherData.daily.snowfallSum[i]
      );
  }