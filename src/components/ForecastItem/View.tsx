// components/ForecastItem/View.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { ForecastDay } from '../../models/weather';
import { getWeatherIcon } from '../../models/weatherIcons';
import { styles } from './styles';

interface ForecastItemProps {
  forecast: ForecastDay;
}

const ForecastItemView: React.FC<ForecastItemProps> = ({ forecast }) => {
  const WeatherIcon = getWeatherIcon(forecast.day.condition.text);
  const date = new Date(forecast.date);
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  const formattedDate = `${date.getDate()} ${date.toLocaleDateString('en-US', { month: 'short' })}`;

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        {WeatherIcon}
        <View style={styles.dayContainer}>
          <Text style={styles.dayText}>{dayName},</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>
      </View>

      <View style={styles.tempContainer}>
        <Text style={styles.maxTemp}>{Math.round(forecast.day.maxtemp_c)}°</Text>
        <Text style={styles.minTemp}>/ {Math.round(forecast.day.mintemp_c)}°</Text>
      </View>
    </View>
  );
};

export default ForecastItemView;
