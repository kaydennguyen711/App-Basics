import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import credentials from '../credentials.json';

export default function SignInScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const validateUser = () => {
    const user = credentials.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      navigation.navigate('Welcome');
    } else {
      Alert.alert('Invalid Username or Password', 'Please try again.');
    }
  };

  return (
    <View>
      <Text>Sign In</Text>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Sign In" onPress={validateUser} />
    </View>
  );
}