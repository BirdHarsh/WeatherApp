
import React from 'react';
import WeatherCardView from './View';
import { OpenWeatherAPIResponse } from '../../models/openWeatherApi';

interface WeatherCardContainerProps {
  weatherData: OpenWeatherAPIResponse;
}

const WeatherCardContainer: React.FC<WeatherCardContainerProps> = ({ weatherData }) => {
  return <WeatherCardView weatherData={weatherData} />;
};

export default WeatherCardContainer;
