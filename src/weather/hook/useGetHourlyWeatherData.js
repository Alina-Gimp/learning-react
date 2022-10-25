import { useState, useEffect } from 'react';

function useGetHourlyWeatherData() {
  const [hourlyWeather, setHourlyWeather] = useState([]);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Ljubljana&appid=765296cc4d0787c4b6b8a0004fc4fcc0')
      .then((response) => response.json())
      .then((data) => {
        setHourlyWeather(data.list);
      });
  }, [hourlyWeather.length]);

  return hourlyWeather;
}
export default useGetHourlyWeatherData;
