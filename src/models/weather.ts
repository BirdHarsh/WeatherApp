export interface WeatherData {
  current: {
    temp_c: number;
    feelslike_c: number;
    wind_kph: number;
    humidity: number;
    pressure_mb: number;
    condition: {
      text: string;
    };
  };
  location: {
    name: string;
  };
}


export interface ForecastDay {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  hour: HourForecast[];
}

export interface HourForecast {
  time: string;
  time_epoch: number;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}