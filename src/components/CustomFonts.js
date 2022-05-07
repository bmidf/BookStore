import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function CustomFonts() {
  const [fontsLoaded] = useFonts({
    Montserrat: require('./Montserrat-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <View>
      <Text style={{ fontFamily: 'Montserrat', fontSize: 30 }}>Montserrat</Text>
    </View>
  );
}