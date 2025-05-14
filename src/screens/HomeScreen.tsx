import { StyleSheet, View } from 'react-native'
import React from 'react'
import WeatherCard from '../components/WeatherCard';
import HourlyForecast from '../components/HourlyCasting';
import { mockHourlyData } from '../test/fakedata';
import { useWeather } from '../context/weatherContext';

const rawWeatherData = {
  coord: { lon: 78.7514, lat: 23.8191 },
  weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03n" }],
  base: "stations",
  main: { temp: 302.56, feels_like: 302.28, temp_min: 302.56, temp_max: 302.56, pressure: 1005, humidity: 41, sea_level: 1005, grnd_level: 946 },
  visibility: 10000,
  wind: { speed: 2.34, deg: 248, gust: 4.02 },
  clouds: { all: 29 },
  dt: 1747169512,
  sys: { country: "IN", sunrise: 1747180999, sunset: 1747228770 },
  timezone: 19800,
  id: 1257845,
  name: "Saugor",
  cod: 200
};
const HomeScreen = () => {


const { forecastData,weatherData } = useWeather();

  return (
   <View style={{ padding: 20, flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
  <WeatherCard weatherData={weatherData? weatherData : rawWeatherData} />
  <HourlyForecast hourlyData={forecastData? forecastData : mockHourlyData}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})