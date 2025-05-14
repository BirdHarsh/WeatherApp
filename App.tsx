

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
 

} from 'react-native';
import HomeScreenContainer from './src/screens/HomeScreen';

import { WeatherProvider } from './src/context/weatherContext';
import SevenDaysContainer from './src/screens/SevenDayScreen';
const Stack = createNativeStackNavigator();

function App() {


  return (
    <WeatherProvider>
  <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreenContainer} options={{ headerShown: false }} />
<Stack.Screen name="Details" component={SevenDaysContainer} options={{ headerShown: false }} />
</Stack.Navigator>
  </NavigationContainer>
    </WeatherProvider>
  );
}



export default App;
