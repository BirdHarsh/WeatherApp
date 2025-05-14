
import { HourForecast } from "../models/weather";

export const mockHourlyData: HourForecast[] = Array.from({ length: 12 }).map((_, i) => {
  const now = new Date();
  const futureHour = new Date(now.getTime() + i * 60 * 60 * 1000); 
  const hour = futureHour.getHours();

  return {
    time: futureHour.toISOString(),
    time_epoch: Math.floor(futureHour.getTime() / 1000),
    temp_c: 16 + Math.round(Math.random() * 10), 
    condition: {
      text: getMockCondition(hour),
      icon: '', 
    },
  };
});

function getMockCondition(hour: number): string {
  if (hour >= 6 && hour <= 9) return 'clear';
  if (hour >= 10 && hour <= 15) return 'sunny';
  if (hour >= 16 && hour <= 18) return 'partly cloudy';
  if (hour >= 19 && hour <= 22) return 'snow';
  return 'Clear';
}
