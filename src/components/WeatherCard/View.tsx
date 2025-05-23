
import React, { use } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import { getWeatherIcon } from '../../models/weatherIcons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './styles';
import { OpenWeatherAPIResponse } from '../../models/openWeatherApi';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import { useWeather } from '../../context/weatherContext';


interface WeatherCardProps {
  weatherData: OpenWeatherAPIResponse;
}

countries.registerLocale(enLocale);
const WeatherCardView: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const {loading}= useWeather();
  if (loading) {
    return (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

if (!weatherData || !weatherData.main || !weatherData.weather || !weatherData.wind || !weatherData.sys) {
    return (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text>HOLD A SEC</Text>
      </View>
    );
  }
 
  const current = {
    temp_c: weatherData.main.temp - 273.15 , 
    feelslike_c: weatherData.main.feels_like - 273.15,  
    wind_kph: weatherData.wind.speed * 3.6,  
    humidity: weatherData.main.humidity,
    pressure_mb: weatherData.main.pressure,
    condition: {
      text: weatherData.weather[0].description,  
    },
  };
const countryName = countries.getName(weatherData.sys.country, 'en');
  const location = {
    name: weatherData.name,
  };

  const WeatherIcon = getWeatherIcon(current.condition.text); 

  const date = new Date();
  const formattedDate = `${date.toLocaleDateString('en-US', { weekday: 'long' })}, ${date.getDate()} ${date.toLocaleDateString('en-US', { month: 'short' })}`;

  const metrics = [
    {
      icon: 'wind',
      label: 'WIND',
      value: `${Math.round(current.wind_kph)} km/h`,
    },
    {
      icon: 'temperature-empty',
      label: 'FEELS LIKE',
      value: `${Math.round(current.feelslike_c)}°`,
    },
    {
      icon: 'sun',
      label: 'SUNRISE',
      value: '06:00 AM',
    },
    {
      icon: 'chart-line',
      label: 'PRESSURE',
      value: `${current.pressure_mb} mbar`,
    },
  ];

  return (
 
    <View >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Entypo name="menu" size={30} color="#000000" />
        <SimpleLineIcons name="options" size={24} color="#000000" />
      </View>

      <View style={{ marginBottom: 16, flexDirection: 'row', alignItems: 'baseline', paddingVertical: 30 }}>
        <Text style={styles.cityLocation}>{location.name}, </Text>
        <Text style={styles.countryLocation}>{countryName}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.internalCard}>
          <View style={styles.iconContainer}>
            {WeatherIcon}
          </View>

          <Text style={styles.weatherCondition}>{current.condition.text}</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>

          <Text style={styles.temperature}>{Math.round(current.temp_c)}°</Text>
        </View>

        <View style={styles.metricsContainer}>
          {metrics.map((item, index) => (
            <View key={index} style={styles.metricItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginHorizontal: 8 ,}}>
                  <Icon name={item.icon} color="white" size={24} />
                </View>

                <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 8 }}>
                  <Text style={styles.metricLabel}>{item.label}</Text>
                  <Text style={styles.metricValue}>{item.value}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default WeatherCardView;
