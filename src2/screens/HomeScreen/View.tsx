// components/HomeScreen/View.tsx
import React from 'react';
import { Text, View } from 'react-native';
import WeatherCardContainer from '../../components/WeatherCard';
import HourlyForecastContainer from '../../components/HourlyCasting';
import { styles } from './styles';
import { HourForecast } from '../../models/weather';
import { OpenWeatherAPIResponse } from '../../models/openWeatherApi';

interface HomeScreenViewProps {
  weatherData: OpenWeatherAPIResponse;
  hourlyData: HourForecast[];
}

const HomeScreenView: React.FC<HomeScreenViewProps> = ({ weatherData, hourlyData }) => {
  return (
    <View style={styles.container}>
      
      <WeatherCardContainer weatherData={weatherData} />
      <HourlyForecastContainer hourlyData={hourlyData} />
    </View>
  );
};

export default HomeScreenView;
