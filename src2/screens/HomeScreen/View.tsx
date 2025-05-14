// components/HomeScreen/View.tsx
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import WeatherCardContainer from '../../components/WeatherCard';
import HourlyForecastContainer from '../../components/HourlyCasting';
import { styles } from './styles';
import { HourForecast } from '../../models/weather';
import { OpenWeatherAPIResponse } from '../../models/openWeatherApi';
import { useWeather } from '../../context/weatherContext';

interface HomeScreenViewProps {
  weatherData: OpenWeatherAPIResponse;
  hourlyData: HourForecast[];
}

const HomeScreenView: React.FC<HomeScreenViewProps> = ({ weatherData, hourlyData }) => {
  const {loading}= useWeather();
    
  return (
    <View style={styles.container}>

{      loading ? (
        <View style={{ padding: 20, alignItems: 'center' , justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      ) : (
       (<ScrollView><WeatherCardContainer weatherData={weatherData} />
      <HourlyForecastContainer hourlyData={hourlyData} /></ScrollView>)
      )}

      
      
    </View>
  );
};

export default HomeScreenView;
