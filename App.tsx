

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
 

} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SevenDaysScreen from './src/screens/SevenDaysScreen';
import { WeatherProvider } from './src/context/weatherContext';
const Stack = createNativeStackNavigator();

function App() {

  
  
  return (
    <WeatherProvider>
  <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
<Stack.Screen name="Details" component={SevenDaysScreen} options={{ headerShown: false }} />
</Stack.Navigator>
  </NavigationContainer>
    </WeatherProvider>
  );
}



export default App;
