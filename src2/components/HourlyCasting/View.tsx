// View.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { HourForecast } from '../types/weather';
import { getWeatherIcon } from '../utils/weatherIcons';
import { styles } from './styles';

interface HourlyForecastProps {
  hourlyData: HourForecast[];
}

const HourlyForecastView: React.FC<HourlyForecastProps> = ({ hourlyData }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.title}>Today</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text style={{ color: '#848484', fontSize: 16 }}>
            Next 7 Days <Icon name="right" size={16} color="#848484" />
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {hourlyData.map((hour, index) => {
          const WeatherIcon = getWeatherIcon(hour.condition.text);
          const hourTime = new Date(hour.time).getHours();
          const formattedHour = hourTime === 12
            ? '12:00'
            : hourTime === 0
            ? '00:00'
            : hourTime > 12
            ? `${hourTime - 12}:00`
            : `${hourTime}:00`;
          const amPm = hourTime >= 12 ? 'PM' : 'AM';

          return (
            <View key={index} style={[styles.hourItem, index === 0 && styles.currentHour]}>
              <Text style={[styles.hourText, index === 0 && styles.currentHourText]}>
                {index === 0 ? 'Now' : formattedHour}
              </Text>
              <View style={styles.iconContainer}>
                {React.cloneElement(WeatherIcon, {
                  color: index === 0 ? 'white' : '#4285F4',
                  size: 24,
                })}
              </View>
              <Text style={[styles.tempText, index === 0 && styles.currentHourText]}>
                {Math.round(hour.temp_c)}°
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HourlyForecastView;
