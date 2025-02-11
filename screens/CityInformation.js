import React from 'react';
import { View, Text } from 'react-native';


export default function CityInformation({ city, info }) {

    return (
        <View style={{ padding: 16, marginTop: 16, width: '100%' }}>

            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Interesting Facts about {city}:
            </Text>

            <View style={{ marginTop: 16 }}>
                <Text>Population: {info.population}</Text>
                <Text>Area: {info.area}</Text>

                {info.facts.map((fact, index) => (
                    <Text key={index} style={{ marginTop: 8 }}>
                        • {fact}
                    </Text>
                ))}
            </View>
        </View>
    );
}