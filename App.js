import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignInScreen from './screens/SignInScreen';
import CityScreen from './screens/CityScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CityTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calgary" children={() => <CityScreen city="Calgary" url="https://www.calgary.ca/home.html" />} />
      <Tab.Screen name="Edmonton" children={() => <CityScreen city="Edmonton" url="https://www.edmonton.ca/" />} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Welcome" component={CityTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
