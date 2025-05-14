import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { getWeatherIcon } from '../utils/weatherIcons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { OpenWeatherAPIResponse } from '../types/openWeatherApi';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
interface WeatherCardProps {
  weatherData: OpenWeatherAPIResponse;
}

const { width } = Dimensions.get('window');
countries.registerLocale(enLocale);


export default function WeatherCard({ weatherData }: WeatherCardProps) {
  const current = {
    temp_c: weatherData.main.temp - 273.15,  // Convert Kelvin to Celsius
    feelslike_c: weatherData.main.feels_like - 273.15,  // Convert Kelvin to Celsius
    wind_kph: weatherData.wind.speed * 3.6,  // Convert m/s to km/h
    humidity: weatherData.main.humidity,
    pressure_mb: weatherData.main.pressure,
    condition: {
      text: weatherData.weather[0].description,  // Get weather condition text
    },
  };

  const location = {
    name: weatherData.name,
  };

  const WeatherIcon = getWeatherIcon(current.condition.text);  // No need to invoke it

  const date = new Date();
  const formattedDate = `${date.toLocaleDateString('en-US', { weekday: 'long' })}, ${date.getDate()} ${date.toLocaleDateString('en-US', { month: 'short' })}`;
const countryName = countries.getName(weatherData.sys.country, 'en');
const sunriseTimestamp = weatherData.sys.sunrise;
const sunriseDate = new Date(sunriseTimestamp * 1000);  // multiply by 1000 for JS timestamp
const formattedSunrise = sunriseDate.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});


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
    value: formattedSunrise,
  },
  {
    icon: 'chart-line',
    label: 'PRESSURE',
    value: `${current.pressure_mb} mbar`,
  },
];


  return (
  <View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  }}>
     <Entypo name="menu" size={30} color="#000000" />
      <SimpleLineIcons name="options" size={24} color="#000000" />
    </View>
    <View style={{ marginBottom: 16 , flexDirection: 'row', alignItems: 'baseline', paddingVertical:30}}>
          <Text style={styles.cityLocation}>{location.name}, </Text>
     <Text style={styles.countryLocation}>{countryName}</Text>
    </View>
   
    <View style={styles.card}>
        <View style= {styles.internalCard}> 
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
        <View style={{ flexDirection: 'row', alignItems: 'center',   }}>



        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'flex-end', marginHorizontal: 8 }}>
      <Icon name={item.icon} color="white" size={24}  />
      </View>




      <View style={{ flex: 1, justifyContent: 'center',marginHorizontal: 8  }}>
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
}

const styles = StyleSheet.create({
  card: {
    width: width - 48,
    backgroundColor: '#4285F4',
    borderRadius: 16,

    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  internalCard: {
 
  
justifyContent: 'center',
    padding: 24,
    alignItems: 'center',
   
   
  

    
  },
  iconContainer: {
    marginBottom: 16,
  },
  weatherCondition: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,

  },
  dateText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    marginBottom: 20,
  },
  temperature: {
    color: 'white',
    fontSize: 80,
    fontWeight: '700',
    marginBottom: 24,
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  metricItem: {
    width: '50%',


    padding: 12,

    borderTopWidth: 1,
    borderEndWidth: 1,
    borderColor: '#92c1ff',
  },
  metricLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    marginTop: 4,
  },
  metricValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 2,
  },
  cityLocation: {
    color: '#000000',
    fontSize: 26,
    fontWeight: '600',
    
    
    fontFamily: 'Poppins-Bold',
  },
 countryLocation: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
    
    fontFamily: 'Poppins-Light',
  },
});
