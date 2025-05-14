
import React from 'react';
import View from './View';
import { HourForecast } from '../../models/weather';

interface HourlyForecastContainerProps {
  hourlyData: HourForecast[];
}

const HourlyForecastContainer: React.FC<HourlyForecastContainerProps> = ({ hourlyData }) => {
  return <View hourlyData={hourlyData} />;
};

export default HourlyForecastContainer;
