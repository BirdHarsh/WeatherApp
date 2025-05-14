import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  // Example import

export const getWeatherIcon = (condition: string) => {
  const conditionLower = condition.toLowerCase();

  const conditionMap: { keywords: string[]; icon: React.ComponentType<any>, name: string }[] = [
    { keywords: ['rain', 'drizzle'], icon: Icon, name: 'weather-pouring' },
    { keywords: ['clear', 'sunny'], icon: Icon, name: 'weather-sunny' },
    { keywords: ['cloud', 'sun'], icon: Icon, name: 'weather-partly-cloudy' },
    { keywords: ['cloud', 'overcast'], icon: Icon, name: 'cloud' },
    { keywords: ['fog', 'mist'], icon: Icon, name: 'cloud-fog' },
    { keywords: ['snow', 'sleet'], icon: Icon, name: 'weather-partly-snowy' },
    { keywords: ['thunder', 'lightning'], icon: Icon, name: 'weather-lightning' },
  ];

  for (const { keywords, icon, name } of conditionMap) {
    if (keywords.every(k => conditionLower.includes(k))) {
      // Return the icon component directly, passing the necessary props
      return <Icon name={name} size={60} color="white" />;
    }
  }

  // Default fallback icon
  return <Icon name="weather-pouring" size={60} color="white" />;
};
