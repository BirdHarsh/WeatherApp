import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, Platform, TouchableOpacity } from 'react-native';

import ForecastItem from '../components/ForecastItem';
import Icon  from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useWeather } from '../context/weatherContext';

export default function SevenDaysScreen() {

 const navigation = useNavigation();
  const weatherData = {
  location: {
    name: 'San Francisco',
    country: 'USA',
  },
  forecast: {
    forecastday: [
      {
        date: '2025-05-14',
        date_epoch: 1747094400,
        day: {
          maxtemp_c: 22,
          mintemp_c: 13,
          condition: {
            text: 'Sunny',
            icon: 'sunny',
          },
        },
        hour: [],
      },
      {
        date: '2025-05-15',
        date_epoch: 1747180800,
        day: {
          maxtemp_c: 20,
          mintemp_c: 12,
          condition: {
            text: 'Partly cloudy',
            icon: 'partly-cloudy',
          },
        },
        hour: [],
      },
      {
        date: '2025-05-16',
        date_epoch: 1747267200,
        day: {
          maxtemp_c: 18,
          mintemp_c: 11,
          condition: {
            text: 'Rain',
            icon: 'rain',
          },
        },
        hour: [],
      },
      {
        date: '2025-05-17',
        date_epoch: 1747353600,
        day: {
          maxtemp_c: 19,
          mintemp_c: 10,
          condition: {
            text: 'Cloudy',
            icon: 'cloudy',
          },
        },
        hour: [],
      },
      {
        date: '2025-05-18',
        date_epoch: 1747440000,
        day: {
          maxtemp_c: 21,
          mintemp_c: 12,
          condition: {
            text: 'Sunny',
            icon: 'sunny',
          },
        },
        hour: [],
      },
      {
        date: '2025-05-19',
        date_epoch: 1747526400,
        day: {
          maxtemp_c: 23,
          mintemp_c: 14,
          condition: {
            text: 'Sunny',
            icon: 'sunny',
          },
        },
        hour: [],
      },
      {
        date: '2025-05-20',
        date_epoch: 1747612800,
        day: {
          maxtemp_c: 24,
          mintemp_c: 15,
          condition: {
            text: 'Partly cloudy',
            icon: 'partly-cloudy',
          },
        },
        hour: [],
      },
    ],
  },
};
 
  const { sevenDaysData} = useWeather();
  console.log('Forecast Data:', JSON.stringify(sevenDaysData));

  
  const { location, forecast } =  sevenDaysData? sevenDaysData : weatherData;
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4285F4" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="left" size={24} color="#FFF" />
        </TouchableOpacity>
        
       
          <Text style={styles.headerTitle}>{location.name}, {location.country}</Text>
       
      </View>
      
      <View style={styles.forecastContainer}>
        <Text style={styles.forecastTitle}>Next 7 Days</Text>
        
        <FlatList
          data={forecast.forecastday}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => <ForecastItem forecast={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.forecastList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4285F4',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#4285F4',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  forecastContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  forecastTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 16,
  },
  forecastList: {
    paddingBottom: 24,
  },
});