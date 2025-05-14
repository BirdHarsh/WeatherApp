import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "4cd569ffb3ecc3bffe9c0587ff02109f";

export const fetchWeatherData = async (latitude: number, longitude: number) => {
      try {
      const url =`${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
      console.log(url);
      const response = await axios.get(url,{});
      
if (response.status !== 200) {
        throw new Error('Failed to fetch weather data');
      }
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw new Error('Failed to fetch weather data');
    }
    
}