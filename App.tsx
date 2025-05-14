

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
 

} from 'react-native';
import HomeScreenContainer from './src2/screens/HomeScreen';
import SevenDaysScreen from './src/screens/SevenDaysScreen';
import { WeatherProvider } from './src2/context/weatherContext';
import SevenDaysContainer from './src2/screens/SevenDayScreen';
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
