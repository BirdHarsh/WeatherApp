// components/SevenDaysScreen/Container.tsx
import React from 'react';
import SevenDaysView from './View';
import { useNavigation } from '@react-navigation/native';
import { useWeather } from '../../context/weatherContext';

const fallbackData = {
  location: { name: 'San Francisco', country: 'USA' },
  forecast: {
    forecastday: [
      { date: '2025-05-14', day: { maxtemp_c: 22, mintemp_c: 13, condition: { text: 'Sunny', icon: 'sunny' } } },
      { date: '2025-05-15', day: { maxtemp_c: 20, mintemp_c: 12, condition: { text: 'Partly cloudy', icon: 'partly-cloudy' } } },
      { date: '2025-05-16', day: { maxtemp_c: 18, mintemp_c: 11, condition: { text: 'Rain', icon: 'rain' } } },
      { date: '2025-05-17', day: { maxtemp_c: 19, mintemp_c: 10, condition: { text: 'Cloudy', icon: 'cloudy' } } },
      { date: '2025-05-18', day: { maxtemp_c: 21, mintemp_c: 12, condition: { text: 'Sunny', icon: 'sunny' } } },
      { date: '2025-05-19', day: { maxtemp_c: 23, mintemp_c: 14, condition: { text: 'Sunny', icon: 'sunny' } } },
      { date: '2025-05-20', day: { maxtemp_c: 24, mintemp_c: 15, condition: { text: 'Partly cloudy', icon: 'partly-cloudy' } } },
    ]
  }
};

const SevenDaysContainer = () => {
  const navigation = useNavigation();
  const { sevenDaysData } = useWeather();

  const data = {
    navigation,
    location: sevenDaysData?.location ?? fallbackData.location,
    forecast: sevenDaysData?.forecast ?? fallbackData.forecast,
  };

  return <SevenDaysView {...data} />;
};

export default SevenDaysContainer;
