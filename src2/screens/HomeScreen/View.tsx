// components/HomeScreen/View.tsx
import React from 'react';
import { View } from 'react-native';
import WeatherCard from '../WeatherCard';
import HourlyForecast from '../HourlyCasting';
import { styles } from './styles';
import { HourForecast } from '../../types/weather';
import { OpenWeatherAPIResponse } from '../../types/openWeatherApi';

interface HomeScreenViewProps {
  weatherData: OpenWeatherAPIResponse;
  hourlyData: HourForecast[];
}

const HomeScreenView: React.FC<HomeScreenViewProps> = ({ weatherData, hourlyData }) => {
  return (
    <View style={styles.container}>
      <WeatherCard weatherData={weatherData} />
      <HourlyForecast hourlyData={hourlyData} />
    </View>
  );
};

export default HomeScreenView;
