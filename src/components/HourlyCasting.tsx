import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { HourForecast } from '../types/weather';
import { getWeatherIcon } from '../utils/weatherIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

interface HourlyForecastProps {
  hourlyData: HourForecast[];
  
}

const { width } = Dimensions.get('window');

export default function HourlyForecast({ hourlyData }: HourlyForecastProps) {
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
          const formattedHour = hourTime === 12 ? '12:00' : 
                                hourTime === 0 ? '00:00' : 
                                hourTime > 12 ? `${hourTime - 12}:00` : `${hourTime}:00`;
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
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: width - 48,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  scrollContent: {
    paddingBottom: 8,
  },
  hourItem: {
    backgroundColor: '#F5F7FA',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginRight: 10,
    width: 60,
  },
  currentHour: {
    backgroundColor: '#4285F4',
  },
  hourText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  currentHourText: {
    color: 'white',
  },
  iconContainer: {
    marginVertical: 8,
  },
  tempText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});