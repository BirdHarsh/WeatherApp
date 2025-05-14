import axios from 'axios';

const API_KEY = '4cd569ffb3ecc3bffe9c0587ff02109f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export async function getWeatherForecast(city: string) {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });

    const data = res.data;

    if (!data.list || !data.city) {
      throw new Error(data.message || 'Invalid weather response');
    }

    const now = new Date();

    const next24Hours = data.list
      .filter((entry: any) => {
        const entryTime = new Date(entry.dt_txt);
        const hoursAhead = (entryTime.getTime() - now.getTime()) / (1000 * 60 * 60);
        return hoursAhead >= 0 && hoursAhead <= 24;
      })
      .map((entry: any) => ({
        time: entry.dt_txt,
        time_epoch: entry.dt,
        temp_c: Math.round(entry.main.temp),
        condition: {
          text: entry.weather?.[0]?.main || 'Clear',
          icon: mapIconToSimple(entry.weather?.[0]?.icon || '01d'),
        },
      }));

    const grouped: Record<string, any[]> = {};
    data.list.forEach((entry: any) => {
      const date = entry.dt_txt.split(' ')[0];
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(entry);
    });

    const forecastday = Object.entries(grouped)
      .slice(0, 7) // 7-day forecast
      .map(([date, entries]) => {
        const temps = entries.map((e) => e.main.temp);
        const conditionTexts = entries.map((e) => e.weather?.[0]?.main || 'Clear');
        const icons = entries.map((e) => e.weather?.[0]?.icon || '01d');

        return {
          date,
          date_epoch: new Date(date).getTime() / 1000,
          day: {
            maxtemp_c: Math.round(Math.max(...temps)),
            mintemp_c: Math.round(Math.min(...temps)),
            condition: {
              text: mostCommon(conditionTexts),
              icon: mapIconToSimple(icons[0]),
            },
          },
          hour: [], 
        };
      });

    return {
      location: {
        name: data.city.name || 'Unknown',
        country: data.city.country || 'N/A',
      },
      next24Hours,
      forecast: {
        forecastday,
      },
    };
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message || 'Failed to fetch weather');
  }
}

function mostCommon(arr: string[]): string {
  const count: Record<string, number> = {};
  for (const val of arr) {
    count[val] = (count[val] || 0) + 1;
  }
  return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
}

function mapIconToSimple(code: string): string {
  const map: Record<string, string> = {
    '01d': 'snow',
    '01n': 'thunderstrom',
    '02d': 'rain',
    '02n': 'partly-cloudy-night',
    '03d': 'cloud',
    '03n': 'cloud',
    '04d': 'snow',
    '04n': 'mist',
    '09d': 'rain',
    '09n': 'rain',
    '10d': 'rain',
    '10n': 'rain',
    '11d': 'thunder',
    '11n': 'thunder',
    '13d': 'snow',
    '13n': 'snow',
    '50d': 'mist',
    '50n': 'mist',
  };
  return map[code] || 'unknown';
}
