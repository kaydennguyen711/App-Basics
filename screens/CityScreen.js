import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';
import CityInformation from './CityInformation';

export default function CityScreen({ city, url }) {
  const cityImages = {
    Calgary: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Calgary_Skyline_2021.jpg/400px-Calgary_Skyline_2021.jpg',
    Edmonton: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Downtown_Edmonton_Skyline.jpg/400px-Downtown_Edmonton_Skyline.jpg',
  };

  const cityInfo = {
    Calgary: {
        population: '1,414,000',
        area: '825 km²',
        facts: [
            'Calgary is the sunniest city in Canada, with 333 days of sunshine per year.',
            'The Calgary Stampede is an annual rodeo, exhibition, and festival held every July.',
            'Calgary is home to the worst team in the NHL.',
        ],
    },
    Edmonton: {
        population: '1,418,000',
        area: '684 km²',
        facts: [
            'Edmonton is the capital city of Alberta.',
            'The West Edmonton Mall is the largest shopping mall in North America.',
            'In the wintertime, the Northern Lights can be seen over Edmonton.',
        ],
    },
  };

  return (
    <View style={{ padding: 16, display: 'flex', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
        Welcome to {city}
      </Text>
      <Image
        source={{ uri: cityImages[city] }}
        style={{ width: 300, height: 200, marginBottom: 8 }}
      />
      <Button title="Go to City Page" onPress={() => Linking.openURL(url)} />

      <CityInformation city={city} info={cityInfo[city]} />
    </View>
  );
}
