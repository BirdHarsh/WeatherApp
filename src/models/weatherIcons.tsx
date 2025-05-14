import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const getWeatherIcon = (condition: string) => {
  const conditionLower = condition.toLowerCase();

  const conditionMap: { keywords: string[]; icon: React.ComponentType<any>, name: string }[] = [
    { keywords: ['shower rain'], icon: Icon, name: 'weather-pouring' },
    { keywords: ['clear sky',], icon: Icon, name: 'weather-sunny' },
    { keywords: ['few clouds','Clouds'], icon: Icon, name: 'weather-partly-cloudy' },
    { keywords: ['scattered clouds'], icon: Icon, name: 'cloud' },
    { keywords: ['mist'], icon: Icon, name: 'cloud-fog' },
    { keywords: ['snow'], icon: Icon, name: 'weather-snowy' },
    { keywords: ['thunderstorm'], icon: Icon, name: 'weather-lightning' },
  ];

  for (const { keywords, icon, name } of conditionMap) {
    if (keywords.some(k => conditionLower.includes(k))) {
      return <Icon name={name} size={60} color="white" />;
    }
  }

  // Default fallback icon
  return <Icon name="weather-partly-cloudy" size={60} color="white" />;
};
