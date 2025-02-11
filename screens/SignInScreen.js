import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import credentials from '../credentials.json';

export default function SignInScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      setUsername('');
      setPassword('');
    }, [])
  );

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
    <View style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
      <Text>Sign In</Text>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign In" onPress={validateUser} />
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 45,
      width: '50%',
      borderColor: '#DDD',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      fontSize: 18,
      textAlign: 'center'
    }
});