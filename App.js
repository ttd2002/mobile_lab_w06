import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen_1 from './Screen/Screen_1';
import Screen_2 from './Screen/Screen_2';
import Screen_3 from './Screen/Screen_3';

import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={Screen_1} />
        <Tab.Screen name="Settings" component={Screen_2} />
        <Tab.Screen name="Screen3" component={Screen_3} />

      </Tab.Navigator>
    </NavigationContainer>

  );
}


