import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function WelcomeScreen() {
  const route = useRoute();
  return (
    <View>
      <Text>Welcome, {route.params.username}!</Text>
    </View>
  );
}