import React from 'react';
import { View, Text } from 'react-native';
export default function LandingPage() {
  return (
    <View>
      <Text>Welcome to My New App</Text>
      <Stack.Screen name="Welcome" component={CityTabs} />
    </View>
  );
}