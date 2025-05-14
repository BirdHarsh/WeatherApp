import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchWeatherData } from '../services/fetchWeatherInfo';
import { getWeatherForecast } from '../services/fetchForecast';
import { useCurrentLocation } from '../hook/useCurrentLocation';

interface WeatherContextType {
  weatherData: any;
  forecastData: any;
  loading: boolean;
  error: string | null;
  refresh: () => void;
  sevenDaysData: any;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { location, error, loading, refresh } = useCurrentLocation();
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>(null);
  const [sevenDaysData, setSevenDaysData] = useState<any>(null);

  const getWeatherAndForecast = async () => {
    try {
      if (!location) return;

      const weather = await fetchWeatherData(location.latitude, location.longitude);
      setWeatherData(weather);

      const cityName = weather.name;
      const forecast = await getWeatherForecast(cityName);
      setForecastData(forecast.next24Hours);
      setSevenDaysData(forecast);
    } catch (err) {
      console.error('Failed to fetch weather/forecast:', err);
    }
  };

  useEffect(() => {
    if (location) getWeatherAndForecast();
  }, [location]);

  return (
    <WeatherContext.Provider
      value={{ weatherData, forecastData, loading, error, refresh,sevenDaysData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error('useWeather must be used within a WeatherProvider');
  return context;
};
