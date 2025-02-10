import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';

export default function CityScreen({ city, url }) {
  const cityImages = {
    Calgary: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Calgary_Skyline_2021.jpg/400px-Calgary_Skyline_2021.jpg',
    Edmonton: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Downtown_Edmonton_Skyline.jpg/400px-Downtown_Edmonton_Skyline.jpg',
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
        Welcome to {city}
      </Text>
      <Image
        source={{ uri: cityImages[city] }}
        style={{ width: 300, height: 200, marginBottom: 8 }}
      />
      <Button title="Go to City Page" onPress={() => Linking.openURL(url)} />
    </View>
  );
}
