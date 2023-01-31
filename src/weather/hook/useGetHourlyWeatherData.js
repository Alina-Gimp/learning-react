import { useState, useEffect } from 'react';
import ApiKey from '/src/settings/ApiKey';

function useGetHourlyWeatherData() {
  const [hourlyWeather, setHourlyWeather] = useState([]);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Ljubljana&appid=' + ApiKey.WEATHER)
      .then((response) => response.json())
      .then((data) => {
        setHourlyWeather(data.list);
      });
  }, [hourlyWeather.length]);

  return hourlyWeather;
}
export default useGetHourlyWeatherData;
