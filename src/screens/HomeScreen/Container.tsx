// components/HomeScreen/Container.tsx
import React from 'react';
import HomeScreenView from './View';
import { useWeather } from '../../context/weatherContext';
import { mockHourlyData } from '../../utils/fakedata';

const rawWeatherData = {
  coord: { lon: 78.7514, lat: 23.8191 },
  weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03n" }],
  base: "stations",
  main: { temp: 302.56, feels_like: 302.28, temp_min: 302.56, temp_max: 302.56, pressure: 1005, humidity: 41, sea_level: 1005, grnd_level: 946 },
  visibility: 10000,
  wind: { speed: 2.34, deg: 248, gust: 4.02 },
  clouds: { all: 29 },
  dt: 1747169512,
  sys: { country: "IN", sunrise: 1747180999, sunset: 1747228770 },
  timezone: 19800,
  id: 1257845,
  name: "Saugor",
  cod: 200
};

const HomeScreenContainer = () => {
  const { forecastData, weatherData } = useWeather();

  const data = {
    weatherData: weatherData,
    hourlyData: forecastData ,
  };

  return (
  <HomeScreenView {...data} />);
};

export default HomeScreenContainer;
