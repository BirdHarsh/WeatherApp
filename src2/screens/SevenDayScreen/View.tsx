// components/SevenDaysScreen/View.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ForecastItem from '../ForecastItem';
import { styles } from './styles';
import { ForecastDay } from '../../types/weather';

interface Props {
  navigation: any;
  location: {
    name: string;
    country: string;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
}

const SevenDaysView: React.FC<Props> = ({ navigation, location, forecast }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#4285F4" />
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
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

export default SevenDaysView;
