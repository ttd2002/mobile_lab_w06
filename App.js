import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen_1 from './Screen/Screen_1';
import Screen_2 from './Screen/Screen_2';
import Screen_3 from './Screen/Screen_3';
import { } from './component/header_Custom'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Screen2'>
        <Tab.Screen name="Screen1" component={Screen_1}
          options={{
            //header
            headerTitle: 'Chat',
            headerStyle: { backgroundColor: '#1BA9FF' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontWeight: 'bold' },

            headerLeft: () => (
              <Icon name='arrow-back' size={40} color={'white'} />
            ),
            headerRight: () => (
              <Icon name='cart-outline' size={40} color={'white'} />
            ),
            //tab bar
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Icon name="menu-outline" color={'black'} size={26} />
            ),
            tabBarStyle: { backgroundColor: '#1BA9FF' }
          }} />


        <Tab.Screen name="Screen2" component={Screen_2}
          options={{
            headerTitle: ()=>(
              <View style = {{backgroundColor: 'white', padding: 10, flexDirection: 'row'}}>
                <Icon name='search' size={30}/>
                <TextInput placeholder='Dây cáp usb' />
              </View>
            ),
            headerLeft: () => (
              <Icon name='arrow-back' size={40} color={'white'} />
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row',width: 120,justifyContent: 'space-between'}}>
                <Icon name='cart-outline' size={40} color={'white'} />
                <Icon name='ellipsis-horizontal-outline' size={40} color={'white'} />
              </View>

            ),
            headerStyle: { backgroundColor: '#1BA9FF' },

            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Icon name="home-outline" color={'black'} size={26} />
            ),
            tabBarStyle: { backgroundColor: '#1BA9FF' }
          }} />


        <Tab.Screen name="Screen3" component={Screen_3}
          options={{

            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Icon name="return-up-back" color={'black'} size={26} />
            ),
            tabBarStyle: { backgroundColor: '#1BA9FF' }
          }} />

      </Tab.Navigator>
    </NavigationContainer>

  );
}
