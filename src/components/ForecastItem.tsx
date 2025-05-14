import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ForecastDay } from '../types/weather';
import { getWeatherIcon } from '../utils/weatherIcons';

interface ForecastItemProps {
  forecast: ForecastDay;
}




export default function ForecastItem({ forecast }: ForecastItemProps) {
  const WeatherIcon = getWeatherIcon(forecast.day.condition.text );
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
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayContainer: {
    marginLeft: 16,
    flexDirection: 'row',
  },
  dayText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    marginRight: 4,
  },
  dateText: {
    fontSize: 16,
    color: '#d5d5d5',
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  maxTemp: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  minTemp: {
    fontSize: 14,
    color: '#d3d3d3',
    marginLeft: 4,
  },
});